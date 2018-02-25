<template>
  <div>
    <svg
      class="c-easingPreview u-position-cover"
      viewBox="0 0 1 1">
      <polyline
        v-if="$store.state.gradient.settings.easingFunction === 'steps'"
        :points="polyline"
        class="c-easingPreview-path"
      />
      <path
        v-else
        :d="`M0 1C ${$store.state.gradient.ease1.x} ${1 - $store.state.gradient.ease1.y} ${$store.state.gradient.ease2.x} ${1 - $store.state.gradient.ease2.y} 1 0`"
        class="c-easingPreview-path"
      />
    </svg>
  </div>
</template>

<script>
export default {
  computed: {
    polyline() {
      if (this.$store.state.gradient.settings.easingFunction === 'steps') {
        let coordinates = this.$store.state.gradient.colorStopCoordinates
        // Add missing coordinates that the svg needs but gradients doesn't
        const firstCoordinate = coordinates[0]
        const lastCoordinate = coordinates[coordinates.length - 1]
        if (firstCoordinate.mix !== 0) {
          coordinates.unshift({
            mix: firstCoordinate.mix,
            position: 0,
          })
        }
        coordinates.unshift({
          mix: 0,
          position: 0,
        })
        if (lastCoordinate.mix !== 1) {
          coordinates.push({
            mix: lastCoordinate.mix,
            position: 1,
          })
        }
        coordinates.push({
          mix: 1,
          position: 1,
        })
        const polyline = coordinates
          .map(obj => {
            return `${obj.position},${1 - obj.mix}`
          })
          .join(' ')
        return polyline
      }
    },
  },
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

  @nest .c-gradientEditor-editors & {
    stroke-width: var(--stroke-large);
  }
}
</style>
