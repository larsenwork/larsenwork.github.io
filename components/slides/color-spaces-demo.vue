<template>
  <div
    v-if="active"
    :style="{
      '--gradientRGB': gradientCalc('rgb'),
      '--gradientLRGB': gradientCalc('lrgb'),
      '--gradientHSL': gradientCalc('hsl'),
      '--gradientLAB': gradientCalc('lab'),
      '--gradientLCH': gradientCalc('lch'),
      '--color1': gradientColor1,
      '--color2': gradientColor2
    }"
    class="eg-slide"
  >
    <div class="eg-slide-content eg-slide-colorSpacesDemo u-grid u-grid--3-2">
      <div class="u-position-relative">
        Default
      </div>
      <div class="u-position-relative">
        RGB
      </div>
      <div class="u-position-relative">
        LCH
      </div>
      <div class="u-position-relative">
        LRGB
      </div>
      <div class="u-position-relative">
        LAB
      </div>
      <div class="u-position-relative">
        HSL
      </div>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import easingEdit from '~/components/tools/gradient/easing-edit'
import easingPreview from '~/components/tools/gradient/easing-preview'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'
import slideshowMethods from '~/components/mixins/slideshow'

export default {
  components: {
    easingEdit,
    easingPreview,
  },
  mixins: [eagle.slide, gradientOutput, slideshowMethods],
  props: {
    steps: { default: 3, type: Number },
    id: { default: '', type: String },
  },
  watch: {
    step: function() {
      if (this.step === 1) {
        this.initialColors()
      }
      if (this.step === 2) {
        this.middleColors()
      }
      if (this.step === 3) {
        this.finalColors()
      }
    },
    active: function() {
      if (this.active) {
        this.updateSlideId(this.id)
        this.$store.state.gradient.ease1 = {
          x: 0,
          y: 0,
        }
        this.$store.state.gradient.ease2 = {
          x: 1,
          y: 1,
        }
        this.$store.state.gradient.direction = {
          deg: 180,
          x: 0.5,
          y: 0.2,
        }
        // And because watch.step doesn't fire on load...
        if (this.step === 1) {
          this.initialColors()
        }
        if (this.step === 3) {
          this.finalColors()
        }
      }
    },
  },
  methods: {
    initialColors() {
      this.$store.state.gradient.color1 = {
        h: 0,
        s: 100,
        l: 50,
        a: 1,
        hsv: {
          s: 0,
          v: 20,
        },
      }
      this.$store.state.gradient.color2 = {
        h: 166,
        s: 100,
        l: 46,
        a: 1,
        hsv: {
          s: 0,
          v: 10,
        },
      }
    },
    middleColors() {
      this.$store.state.gradient.color1 = {
        h: 0,
        s: 0,
        l: 100,
        a: 1,
        hsv: {
          s: 0,
          v: 20,
        },
      }
      this.$store.state.gradient.color2 = {
        h: 0,
        s: 0,
        l: 0,
        a: 1,
        hsv: {
          s: 0,
          v: 10,
        },
      }
    },
    finalColors() {
      this.$store.state.gradient.color1 = {
        h: 54,
        s: 100,
        l: 50,
        a: 1,
        hsv: {
          s: 0,
          v: 20,
        },
      }
      this.$store.state.gradient.color2 = {
        h: 283,
        s: 100,
        l: 31,
        a: 1,
        hsv: {
          s: 0,
          v: 10,
        },
      }
    },
  },
}
</script>

<style lang="postcss">
.eg-slide-colorSpacesDemo {
  & > * {
    padding: var(--spacer-xsmall);
    width: 100%;
    height: 100%;
  }

  & > * {
    display: flex;
    align-items: flex-end;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    &::before {
      background: linear-gradient(to bottom, var(--color1), var(--color2));
      z-index: -1;
    }

    &::after {
      z-index: -1;
      opacity: 0;
      transition: var(--transition);
    }

    &:nth-child(2)::after {
      background: var(--gradientRGB);
    }

    &:nth-child(3)::after {
      background: var(--gradientLCH);
    }

    &:nth-child(4)::after {
      background: var(--gradientLRGB);
    }

    &:nth-child(5)::after {
      background: var(--gradientLAB);
    }

    &:nth-child(6)::after {
      background: var(--gradientHSL);
    }
  }

  &:hover {
    & > *::after {
      opacity: 1;
      transition: var(--transition);
    }
  }
}
</style>
