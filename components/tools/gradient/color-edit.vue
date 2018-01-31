<template>
  <div
      class="c-colorEdit"
      @touchmove="move"
      @touchend.prevent="up"
      :style="{
        '--hue': $store.state.gradient[color].h
      }"
      >
    <div
        class="c-colorEdit-square"
        >
      <div
          class="u-knob"
          :style="`top: ${100 - $store.state.gradient[color].hsv.v}%; left: ${$store.state.gradient[color].hsv.s}%`"
          @mousedown="down($event, color)"
          @touchstart.prevent="down($event, color)"
          >
      </div>
    </div>

    <div
        class="c-colorEdit-sliders"
        >
      <no-ssr>
        <div
            class="c-colorEdit-hue"
            >
          <vue-slider
              v-bind="slider.hue"
              :show="$store.state.gradient.editorActive === color"
              v-model="$store.state.gradient[color].h"
              >
          </vue-slider>
        </div>
        <div
            class="c-colorEdit-alpha"
            >
          <vue-slider
              v-bind="slider.alpha"
              :show="$store.state.gradient.editorActive === color"
              v-model="$store.state.gradient[color].a"
              >
          </vue-slider>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import mouse from '~/components/mixins/mouse'

let components = {}

if (process.browser) {
  let VueSlider = require('vue-slider-component')
  components = {
    'vue-slider': VueSlider
  }
}

const defaultSlider = {
  tooltip: 'none',
  height: 16,
  dotSize: 32,
  speed: 0,
  processStyle: {
    display: 'none'
  }
}

export default {
  mixins: [mouse],
  components,
  props: ['color'],
  data: function () {
    return {
      slider: {
        hue: {
          ...defaultSlider,
          max: 360,
          interval: 0.1
        },
        alpha: {
          ...defaultSlider,
          max: 1,
          interval: 0.001
        }
      }
    }
  }
}
</script>

<style lang="postcss">
.c-colorEdit {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.c-colorEdit-square {
  width: 100%;
  flex-basis: 10rem;
  flex-shrink: 1;
  flex-grow: 1;
  border-radius: var(--spacer-xsmall);
  background-image:
    linear-gradient( to bottom, hsla(0, 0%, 0%, 0), hsl(0, 0%, 0%)),
    linear-gradient( to right, hsl(0, 0%, 100%), hsla(0, 0%, 100%, 0)),
    linear-gradient( hsl(var(--hue), 100%, 50%), hsl(var(--hue), 100%, 50%));
  position: relative;
}

.c-colorEdit-sliders {
  margin: 24px -16px -16px;
}

.c-colorEdit-hue {
  & .vue-slider {
    background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);
  }
}

.c-colorEdit-alpha {
  & .vue-slider {
    background-image:
      linear-gradient(
        to right,
        transparent,
        black
      ),
      linear-gradient(45deg, var(--color-themed-bg-dimmed-more) 25%, transparent 25%, transparent 75%, var(--color-themed-bg-dimmed-more) 75%, var(--color-themed-bg-dimmed-more)),
      linear-gradient(45deg, var(--color-themed-bg-dimmed-more) 25%, transparent 25%, transparent 75%, var(--color-themed-bg-dimmed-more) 75%, var(--color-themed-bg-dimmed-more)),
      linear-gradient(#fff, #fff);
    background-size: 100% 100%, 16px 16px, 16px 16px, 100% 100%;
    background-position: 0 0, 0 0, 8px 8px, 0 0;
    position: relative;
  }
}

.vue-slider-component {
  & .vue-slider-tooltip-wrap.vue-slider-tooltip-top {
    top: calc(var(--spacer-xsmall) * -1);
    text-align: center;
  }

  & .vue-slider-dot {
    box-shadow: var(--shadow);
    cursor: auto;

    &:hover, &:focus {
      box-shadow: var(--shadow--hover);
    }
  }
}
</style>
