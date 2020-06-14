<template>
  <div class="container">
    <a v-if="!phase" class="btn" @click="start">ゲームスタート</a>
    <div v-else-if="phase === 'playing'" class="btn">
      <PlayingCard :signature="$numToSig(mainCard)" v-if="!!mainCard" />
      <strong v-else>カードなし</strong>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  components: {
    PlayingCard: () => import("@/components/PlayingCard")
  },
  computed: {
    users() {
      return this.$whim.users;
    },
    phase() {
      return this.$whim.state.phase;
    },
    mainCard() {
      return this.$whim.state.mainCard;
    }
  },
  methods: {
    reset() {
      this.$whim.resetState();
    },
    start() {
      const order = this.$shufflePlayers();
      this.$giveAllCards();
      this.$whim.assignState({
        phase: "playing",
        order: order,
        turn: order[0]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  background-color: #ffc605;
  color: #fff;
  padding: 0.8em;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-out;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100px;
  text-align: center; /*一応BOX内の文字も中央寄せ*/

  &:hover {
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12),
      0 3px 20px 0 rgba(0, 0, 0, 0.12), 0 5px 6px -2px rgba(0, 0, 0, 0.2);
  }
}

.me {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 500px;
}
</style>
