<template>
  <svg
    class="c-easingPreview u-position-cover"
    viewBox="0 0 1 1"
    preserveAspectRatio="none"
  >
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
</template>

<script>
export default {
  computed: {
    polyline() {
      if (this.$store.state.gradient.settings.easingFunction === 'steps') {
        const coordinates = this.$store.state.gradient.colorStopCoordinates
        // Add potentially missing coordinates for svg rendering purposes
        coordinates.unshift({ x: 0, y: 0 })
        coordinates.push({ x: 1, y: 1 })
        return coordinates.map(obj => `${obj.x},${1 - obj.y}`).join(' ')
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

  @nest .eg-slide-linearToEasing & {
    stroke: hsl(0, 0%, 50%);
  }
}
</style>
