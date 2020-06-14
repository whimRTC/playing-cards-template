<template>
  <div class="cards">
    <div v-for="(n, card) of $whim.state.hands[displayUser.id]" :key="card">
      <PlayingCard
        v-if="n === 1"
        :signature="$numToSig(card)"
        @click="putDown"
        :cover="!isMe"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "OwnCards",
  props: {
    displayUser: {
      // 表示されているUserの情報
      type: Object,
      required: true
    }
  },
  components: {
    PlayingCard: () => import("@/components/PlayingCard")
  },
  computed: {
    isMe() {
      return this.$whim.accessUser.id === this.displayUser.id;
    },
    isPlayerTurn() {
      return this.$whim.state.turn === this.displayUser.id;
    }
  },
  methods: {
    putDown(signature) {
      if (this.isMe && this.isPlayerTurn) {
        // カードの条件判定
        this.$whim.assignState({
          mainCard: this.$sigToNum(signature),
          turn: this.$nextTurn()
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped></style>
