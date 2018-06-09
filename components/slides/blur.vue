<template>
  <div
    v-if="active"
    :style="{
      '--blur': blur,
      '--blurPx': `${blur}px`,
      '--gradientLRGB': gradientCalc('lrgb'),
      '--gradientRGB': gradientCalc('rgb'),
      '--color1': gradientColor1,
      '--color2': gradientColor2
    }"
    class="eg-slide"
  >
    <div class="eg-slide-content eg-slide-blur u-grid u-grid--3-2">
      <div class="eg-slide-blur-demo">
        <div class="eg-slide-blur-left" />
        <div class="eg-slide-blur-right" />
      </div>

      <div :key="blur" class="eg-slide-blur-demo">
        <div class="eg-slide-blur-left" />
        <div class="eg-slide-blur-right" />
      </div>

      <div class="eg-slide-blur-demo">
        <div class="eg-slide-blur-left" />
        <div class="eg-slide-blur-right" />
      </div>

      <div class="eg-slide-blur-demo u-position-relative">
        <div class="eg-slide-blur-left" />
        <div class="eg-slide-blur-right" />
        <div class="eg-slide-blur-gradient" />
      </div>

      <div class="eg-slide-blur-demo u-position-relative">
        <div class="eg-slide-blur-left" />
        <div class="eg-slide-blur-right" />
        <div class="eg-slide-blur-gradient eg-slide-blur-gradient--fancy" />
      </div>

      <div>
        <label class="c-gradientEditor-label">
          Blur
        </label>
        <input v-model="blur" type="number" min="0" class="u-marginBottom">
      </div>

      <svg>
        <filter id="sharpBlur">
          <feGaussianBlur :stdDeviation="blur" />
        </filter>
      </svg>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'
import slideshowMethods from '~/components/mixins/slideshow'

export default {
  mixins: [eagle.slide, gradientOutput, slideshowMethods],
  props: {
    id: { default: '', type: String },
  },
  data: function() {
    return {
      blur: 0,
    }
  },
  watch: {
    step: function() {
      if (this.step === 1) {
        this.initialColors()
      }
    },
    active: function() {
      if (this.active) {
        this.updateSlideId(this.id)
        this.$store.state.gradient.ease1 = {
          x: 0.42,
          y: 0,
        }
        this.$store.state.gradient.ease2 = {
          x: 0.58,
          y: 1,
        }
        this.$store.state.gradient.direction = {
          deg: 90,
          x: 0.5,
          y: 0.2,
        }
        // And because watch.step doesn't fire on load...
        if (this.step === 1) {
          this.initialColors()
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
        h: 130,
        s: 100,
        l: 20,
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
.eg-slide-blur {
  justify-content: unset !important;

  & svg {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
}

.eg-slide-blur-demo {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  &:nth-child(1) {
    filter: blur(var(--blurPx));
  }

  &:nth-child(2) {
    filter: url('#sharpBlur');
  }
}

.eg-slide-blur-left {
  background-color: var(--color1);
}

.eg-slide-blur-right {
  background-color: var(--color2);
}

.eg-slide-blur-gradient {
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: var(--gradientRGB);
  width: calc(var(--blurPx) * 6);

  &.eg-slide-blur-gradient--fancy {
    background: var(--gradientLRGB);
  }
}
</style>
