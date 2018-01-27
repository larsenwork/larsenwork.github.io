<template>
  <div class="c-easingEdit u-position-cover"
      @touchmove="move"
      @touchend.prevent="up"
      >
    <svg
        class="c-easingEdit-lines u-position-cover"
        viewBox="0 0 1 1"
        >
      <line
          class="c-easingEdit-helpLine"
          x1=".5"
          y1=".2"
          x2=".5"
          y2=".8"
          >
      </line>
      <line
          class="c-easingEdit-helpLine"
          x1=".2"
          y1=".5"
          x2=".8"
          y2=".5"
          >
      </line>
      <rect
          class="c-easingEdit-helpLine"
          x="0"
          y="0"
          width="1"
          height="1"
          >
      </rect>
      <line
          class="c-easingEdit-line"
          x1="0"
          y1="1"
          :x2="$store.state.gradient.ease1.x"
          :y2="1 - $store.state.gradient.ease1.y"
          >
      </line>
      <line
          class="c-easingEdit-line"
          x1="1"
          y1="0"
          :x2="$store.state.gradient.ease2.x"
          :y2="1 - $store.state.gradient.ease2.y"
          >
      </line>
    </svg>
    <div
        class="u-knob"
        :style="`left: ${$store.state.gradient.ease1.x * 100}%; top: ${100 - $store.state.gradient.ease1.y * 100}%`"
        @mousedown="down($event, 'ease1')"
        @touchstart.prevent="down($event, 'ease1')"
        >
    </div>
    <div
        class="u-knob"
        :style="`left: ${$store.state.gradient.ease2.x * 100}%; top: ${100 - $store.state.gradient.ease2.y * 100}%`"
        @mousedown="down($event, 'ease2')"
        @touchstart.prevent="down($event, 'ease2')"
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
.c-easingEdit {
  /* Placeholder */
}

.c-easingEdit-lines {
  overflow: visible;
  opacity: var(--opacity-low);
}

.c-easingEdit-line,
.c-easingEdit-helpLine {
  stroke: currentColor;
  stroke-width: var(--stroke-large);
  stroke-linecap: round;
  stroke-linejoin: round;
  vector-effect: non-scaling-stroke;
}

.c-easingEdit-helpLine {
  opacity: var(--opacity-mid);
  fill: none;
  stroke-dasharray: var(--stroke-large--unitLess), calc(var(--stroke-large--unitLess) * 4);
}
</style>

