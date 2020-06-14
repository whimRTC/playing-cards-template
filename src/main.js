import Vue from "vue";
import App from "./App.vue";
import whimClientVue from "whim-client-vue";
import "whim-client-vue/dist/whim-client-vue.css";
import VuePlayingCard from "vue-playing-card";
import "./assets/main.scss";
import { shuffle } from "./utils";

Vue.config.productionTip = false;
Vue.use(whimClientVue);
Vue.use(VuePlayingCard);

const N_CARDS = 54;
Vue.prototype.$giveAllCards = () => {
  const playerIds = shuffle(Vue.prototype.$whim.users.map(user => user.id));
  const hands = {};
  playerIds.forEach(id => {
    hands[id] = {};
  });
  const cards = shuffle(Array.from({ length: N_CARDS }, (v, k) => k));
  for (const card of cards) {
    for (const id of playerIds) {
      hands[id][card] = 1;
    }
  }
  Vue.prototype.$whim.assignState({ hands });
};
const SUIT = {
  0: "c",
  1: "d",
  2: "h",
  3: "s"
};
Vue.prototype.$numToSig = n => {
  if (n >= 52) return "joker";
  const suit = SUIT[Math.floor(n / 13)];
  let k = String((n % 13) + 1);
  if (k === "1") k = "a";
  else if (k === "10") k = "t";
  else if (k === "11") k = "j";
  else if (k === "12") k = "q";
  else if (k === "13") k = "k";

  return k + suit;
};
const sigToNum = {};
for (let i = 0; i < N_CARDS; i++) {
  sigToNum[Vue.prototype.$numToSig(i)] = i;
}
Vue.prototype.$sigToNum = s => sigToNum[s];

Vue.prototype.$shufflePlayers = () => {
  return shuffle(Vue.prototype.$whim.users.map(u => u.id));
};
Vue.prototype.$nextTurn = () => {
  const state = Vue.prototype.$whim.state;
  const turnNow = state.turn;
  const order = state.order;
  const k = (order.findIndex(id => id === turnNow) + 1) % order.length;
  return order[k];
};

new Vue({
  render: h => h(App)
}).$mount("#app");
