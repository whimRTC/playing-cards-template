<template>
  <div :class="{ border: isPlayerTurn }">
    <OwnCards :displayUser="displayUser" />
  </div>
</template>
<script>
export default {
  name: "Player",
  props: {
    displayUser: {
      // 表示されているUserの情報
      type: Object,
      required: true
    }
  },
  components: {
    OwnCards: () => import("@/components/player/OwnCards")
  },
  computed: {
    isPlayerTurn() {
      return this.$whim.state.turn === this.displayUser.id;
    }
  }
};
</script>
<style lang="scss" scoped>
.border {
  border: solid;
  box-sizing: border-box;
  border-radius: 20px;
  border-width: 10px;
  border-color: yellow;
}
</style>
