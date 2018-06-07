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
    <div class="eg-slide-content eg-slide-gamma u-grid">
      <div class="eg-slide-gamma-demo" />
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'

export default {
  mixins: [eagle.slide, gradientOutput],
  data: function() {
    return {
      blur: 20,
      show: true,
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
.eg-slide-gamma {
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

.eg-slide-gamma-demo {
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

.eg-slide-gamma-left {
  background-color: var(--color1);
}

.eg-slide-gamma-right {
  background-color: var(--color2);
}

.eg-slide-gamma-gradient {
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  background: var(--gradientRGB);
  width: calc(var(--blurPx) * 6);

  &.eg-slide-gamma-gradient--fancy {
    background: var(--gradientLRGB);
  }
}
</style>
