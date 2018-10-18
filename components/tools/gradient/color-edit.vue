<template>
  <div
    :style="{
      '--hue': $store.state.gradient[color].h
    }"
    class="c-colorEdit"
    @touchmove="move"
    @touchend.prevent="up"
  >
    <div
      class="c-colorEdit-square"
    >
      <div
        :style="`top: ${100 - $store.state.gradient[color].hsv.v}%; left: ${$store.state.gradient[color].hsv.s}%`"
        class="u-knob"
        @mousedown="down($event, color)"
        @touchstart.prevent="down($event, color)"
      />
    </div>

    <div
      class="c-colorEdit-sliders"
    >
      <div
        class="c-colorEdit-slider -hue"
      >
        <input
          :show="$store.state.gradient.editorActive === color"
          v-model.number="$store.state.gradient[color].h"
          class="c-colorEdit-hue"
          type="range"
          min="0"
          max="360"
          step="0.1"
        >
      </div>
      <div
        class="c-colorEdit-slider -alpha"
      >
        <input
          :show="$store.state.gradient.editorActive === color"
          v-model.number="$store.state.gradient[color].a"
          class="c-colorEdit-alpha"
          type="range"
          min="0"
          max="1"
          step="0.001"
        >
      </div>
    </div>
  </div>
</template>

<script>
import mouse from '~/components/mixins/mouse'

let components = {}

export default {
  components,
  mixins: [mouse],
  props: {
    color: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
@import '../../../assets/css/_settings.css';

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
  background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0),
      hsl(0, 0%, 0%)
    ),
    linear-gradient(to right, hsl(0, 0%, 100%), hsla(0, 0%, 100%, 0)),
    linear-gradient(hsl(var(--hue), 100%, 50%), hsl(var(--hue), 100%, 50%));
  position: relative;
}

.c-colorEdit-sliders {
  margin-top: var(--spacer-small);
  display: flex;
  flex-direction: column;
}

.c-colorEdit-slider {
  display: inline-flex;
  width: 100%;
  border-radius: calc(var(--spacer-small) * 0.5);

  &:not(:last-child) {
    margin-bottom: var(--spacer-small);
  }

  &.-hue {
    background: linear-gradient(
      to right,
      #f00,
      #ff0,
      #0f0,
      #0ff,
      #00f,
      #f0f,
      #f00
    );
  }

  &.-alpha {
    background-image: linear-gradient(to right, transparent, black),
      linear-gradient(
        45deg,
        var(--color-themed-bg-dimmed-more) 25%,
        transparent 25%,
        transparent 75%,
        var(--color-themed-bg-dimmed-more) 75%,
        var(--color-themed-bg-dimmed-more)
      ),
      linear-gradient(
        45deg,
        var(--color-themed-bg-dimmed-more) 25%,
        transparent 25%,
        transparent 75%,
        var(--color-themed-bg-dimmed-more) 75%,
        var(--color-themed-bg-dimmed-more)
      ),
      linear-gradient(#fff, #fff);
    background-size: 100% 100%,
      calc(var(--spacer-small) * 0.5) calc(var(--spacer-small) * 0.5),
      calc(var(--spacer-small) * 0.5) calc(var(--spacer-small) * 0.5), 100% 100%;
    background-position: 0 0, 0 0,
      calc(var(--spacer-small) * 0.25) calc(var(--spacer-small) * 0.25), 0 0;
  }
}
</style>
