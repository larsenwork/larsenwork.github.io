<template>
  <svg
    class="c-directionPreview u-position-cover"
    viewBox="0 0 1 1"
  >
    <polyline
      :transform="`rotate(${$store.state.gradient.direction.deg} .5 .5)`"
      class="c-directionPreview-polyline"
      points=".5 1 .5 0 .44 .06 .56 .06 .5 0"
    />
  </svg>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.c-directionPreview {
  overflow: visible;
}

.c-directionPreview-polyline {
  fill: currentColor;
  stroke: currentColor;
  stroke-width: var(--stroke-medium);
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;

  @nest .c-gradientEditor-editors & {
    stroke-width: var(--stroke-large);
  }
}
</style>
