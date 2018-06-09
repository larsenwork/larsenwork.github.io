<template>
  <div
    v-if="active"
    :style="{
      '--rgba1': rgba1,
      '--rgba2': rgba2,
      '--rgbaMix': rgbaMix,
      '--rgbaMixL': rgbaMixL,
    }"
    class="eg-slide"
  >
    <div class="eg-slide-content u-grid u-grid--3-4">
      <input v-model="color1" type="text">
      <div />
      <input v-model="color2" type="text">
      <div class="color-demo rgba1">
        {{ rgba1 }}
      </div>
      <div class="color-demo rgbaMix">
        {{ rgbaMix }}
      </div>
      <div class="color-demo rgba2">
        {{ rgba2 }}
      </div>
      <div class="color-demo rgbaMixL">
        {{ rgbaMixL }}
      </div>
      <div class="math">
        <div>({{ r1 }} + {{ r2 }}) / 2 = {{ rMix }}</div>
        <div>√(({{ r1 }}^2 + {{ r2 }}^2) / 2) = {{ rMixL }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'
import slideshowMethods from '~/components/mixins/slideshow'
import chroma from 'chroma-js'

export default {
  mixins: [eagle.slide, gradientOutput, slideshowMethods],
  props: {
    id: { default: '', type: String },
  },
  data: function() {
    return {
      color1: 'red',
      color2: 'green',
    }
  },
  computed: {
    r1() {
      try {
        return chroma(this.color1).rgb()[0]
      } catch (error) {
        return error
      }
    },
    r2() {
      try {
        return chroma(this.color2).rgb()[0]
      } catch (error) {
        return error
      }
    },
    rMix() {
      return (this.r1 + this.r2) / 2
    },
    rMixL() {
      return parseInt(Math.sqrt((this.r1 ** 2 + this.r2 ** 2) / 2))
    },
    rgba1() {
      try {
        return chroma(this.color1).css()
      } catch (error) {
        return error
      }
    },
    rgba2() {
      try {
        return chroma(this.color2).css()
      } catch (error) {
        return error
      }
    },
    rgbaMix() {
      try {
        return chroma.mix(this.color1, this.color2).css()
      } catch (error) {
        return error
      }
    },
    rgbaMixL() {
      try {
        return chroma.mix(this.color1, this.color2, 0.5, 'lrgb').css()
      } catch (error) {
        return error
      }
    },
  },
  watch: {
    active: function() {
      if (this.active) {
        this.updateSlideId(this.id)
      }
    },
  },
  methods: {},
}
</script>

<style lang="postcss">
.color-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacer-xsmall);
  border-radius: var(--spacer-xsmall);

  &.rgba1 {
    grid-row: 2 / span 2;
    background-color: var(--rgba1);
  }
  &.rgba2 {
    grid-column: 3;
    grid-row: 2 / span 2;
    background-color: var(--rgba2);
  }
  &.rgbaMix {
    background-color: var(--rgbaMix);
  }
  &.rgbaMixL {
    background-color: var(--rgbaMixL);
  }
}
.math {
  grid-column: 1 / span 3;
  display: flex;
  justify-content: space-around;
}
</style>
