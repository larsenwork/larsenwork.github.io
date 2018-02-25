<template>
  <div
    class="c-directionEdit u-position-cover"
    @touchmove="move"
    @touchend.prevent="up"
  >
    <svg
      class="c-directionEdit-lines u-position-cover"
      viewBox="0 0 1 1"
    >
      <circle
        class="c-directionEdit-helpLine"
        cx="0.5"
        cy="0.5"
        r="0.3"
      />
    </svg>
    <div
      :style="`left: ${$store.state.gradient.direction.x * 100}%; top: ${100 - $store.state.gradient.direction.y * 100}%`"
      class="u-knob"
      @mousedown="down($event, 'direction')"
      @touchstart.prevent="down($event, 'direction')"
    />
  </div>
</template>

<script>
import mouse from '~/components/mixins/mouse'
export default {
  mixins: [mouse],
}
</script>

<style lang="postcss">
.c-directionEdit {
  /* Placeholder */
}

.c-directionEdit-lines {
  overflow: visible;
  z-index: -1;
}

.c-directionEdit-helpLine {
  stroke-width: var(--stroke-large);
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
  stroke: var(--color-brand);
  opacity: var(--opacity-mid);
  fill: none;
}
</style>
