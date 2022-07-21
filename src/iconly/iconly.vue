
<template>
  <div
    :style="{ fontSize: size, color, marginTop: '-30%', minHeight:'40px', textAlign: 'center' }"
    class="viconly-icon-container"
  >
    <i
      v-if="!bulk"
      :class="{
        icbo: bold,
        icli: light,
        ['iconly-' + icon]: true,
      }"
    >
    </i>
    <span v-else :class="{ ['iconlyBulk-' + icon]: true }">
      <span class="path1"></span>
      <span class="path2"></span>
    </span>
  </div>
</template>

<script>
import "./styles/style.css";
import "./styles/bulk-style.css";
export default /*#__PURE__*/ {
  name: "Viconly", // vue component name
  props: {
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#ffffff",
    },
    bold: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    bulk: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "0.6rem",
    },
  },
};
</script>

<style scoped>
.viconly-icon-container {
  display: initial !important;
}
</style>
