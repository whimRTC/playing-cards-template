<template>
  <div @click="$emit('click', signature)" @mouseover="$emit('mouseover')">
    <img
      src="@/assets/joker.svg"
      v-if="signature === 'joker' && !cover"
      :width="width"
      :height="height"
    />
    <vue-playing-card
      v-else
      :signature="signature"
      :cover="cover"
      :width="width"
      :height="height"
    />
  </div>
</template>
<script>
const DEFAULT_WIDTH = 100;
const DEFAULT_HEIGHT = 140;

export default {
  name: "PlayingCard",
  props: {
    signature: {
      default: null,
      type: String
    },
    cover: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      width: window.innerWidth / 16,
      height: (window.innerWidth / 16) * (DEFAULT_HEIGHT / DEFAULT_WIDTH)
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth / 16;
      this.height = (window.innerWidth / 16) * (DEFAULT_HEIGHT / DEFAULT_WIDTH);
    });
  }
};
</script>
