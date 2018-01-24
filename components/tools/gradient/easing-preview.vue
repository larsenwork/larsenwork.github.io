<template>
  <svg
      class="c-easingPreview u-position-cover"
      viewBox="0 0 1 1">
    <path
        class="c-easingPreview-path"
        :d="`M0 1C ${$store.state.gradient.ease1.x} ${1 - $store.state.gradient.ease1.y} ${$store.state.gradient.ease2.x} ${1 - $store.state.gradient.ease2.y} 1 0`"
        />
  </svg>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
.c-easingPreview {
  overflow: visible;
}

.c-easingPreview-path {
  fill: none;
  stroke-width: var(--stroke-medium);
  stroke-linecap: round;
  stroke: currentColor;
  vector-effect: non-scaling-stroke;

  @nest .c-gradientEditor-editor & {
    stroke-width: var(--stroke-large);
  }
}
</style>
