<template>
  <div class="c-directionEdit u-position-cover"
      @touchmove="move"
      @touchend.prevent="up"
      >
    <svg
        class="c-directionEdit-lines u-position-cover"
        viewBox="0 0 1 1"
        >
      <line
          class="c-directionEdit-helpLine"
          x1=".5"
          y1=".2"
          x2=".5"
          y2=".8"
          >
      </line>
      <line
          class="c-directionEdit-helpLine"
          x1=".2"
          y1=".5"
          x2=".8"
          y2=".5"
          >
      </line>
      <rect
          class="c-directionEdit-helpLine"
          x="0"
          y="0"
          width="1"
          height="1"
          >
      </rect>
    </svg>
    <div
        class="u-knob"
        :style="`left: ${$store.state.gradient.direction.x * 100}%; top: ${100 - $store.state.gradient.direction.y * 100}%`"
        @mousedown="down($event, 'direction')"
        @touchstart.prevent="down($event, 'direction')"
        >
    </div>
  </div>
</template>

<script>
import mouse from '~/components/mixins/mouse'
export default {
  mixins: [mouse]
}
</script>

<style lang="postcss">
.c-directionEdit {
  /* Placeholder */
}

.c-directionEdit-lines {
  opacity: var(--opacity-low);
  overflow: visible;
}

.c-directionEdit-line,
.c-directionEdit-helpLine {
  stroke-width: var(--stroke-large);
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: currentColor;
  vector-effect: non-scaling-stroke;
}

.c-directionEdit-helpLine {
  opacity: var(--opacity-mid);
  fill: none;
  stroke-dasharray: var(--stroke-large--unitLess), calc(var(--stroke-large--unitLess) * 4);
}
</style>

