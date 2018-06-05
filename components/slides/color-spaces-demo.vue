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
        LRGB
      </div>
      <div class="u-position-relative">
        HSL
      </div>
      <div class="u-position-relative">
        LAB
      </div>
      <div class="u-position-relative">
        LCH
      </div>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import easingEdit from '~/components/tools/gradient/easing-edit'
import easingPreview from '~/components/tools/gradient/easing-preview'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'

export default {
  components: {
    easingEdit,
    easingPreview,
  },
  mixins: [eagle.slide, gradientOutput],
  props: {
    // steps: { default: 3, type: Number },
  },
  watch: {
    active: function() {
      if (this.active) {
        const color1 = {
          h: 0,
          s: 100,
          l: 50,
          a: 1,
          hsv: {
            s: 0,
            v: 20,
          },
        }
        const color2 = {
          h: 166,
          s: 100,
          l: 46,
          a: 1,
          hsv: {
            s: 0,
            v: 10,
          },
        }
        const ease1 = {
          x: 0,
          y: 0,
        }
        const ease2 = {
          x: 1,
          y: 1,
        }
        const direction = {
          deg: 180,
          x: 0.5,
          y: 0.2,
        }
        this.$store.state.gradient.direction = direction
        this.$store.state.gradient.ease1 = ease1
        this.$store.state.gradient.ease2 = ease2
        this.$store.state.gradient.color1 = color1
        this.$store.state.gradient.color2 = color2
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

  & > :nth-child(1) {
    background: linear-gradient(to bottom, var(--color1), var(--color2));
  }

  & > :nth-child(2) {
    background: var(--gradientRGB);
  }

  & > :nth-child(3) {
    background: var(--gradientLRGB);
  }

  & > :nth-child(4) {
    background: var(--gradientHSL);
  }

  & > :nth-child(5) {
    background: var(--gradientLAB);
  }

  & > :nth-child(6) {
    background: var(--gradientLCH);
  }
}
</style>
