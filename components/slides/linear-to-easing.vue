<template>
  <div
    v-if="active"
    :style="{
      '--gradientRGB': gradientCalc('rgb'),
      '--color1': gradientColor1,
      '--color2': gradientColor2
    }"
    class="eg-slide"
  >
    <div class="eg-slide-content eg-slide-linearToEasing">
      <div class="u-position-relative">
        <div
          v-if="step > 1"
          class="u-aspect--1-1"
        >
          <svg
            class="u-position-cover"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
          >
            <path
              class="eg-slide-linearToEasing-path"
              d="M0,1 L1,1"
            />
          </svg>
        </div>
      </div>
      <div class="u-position-relative">
        <div
          v-if="step > 1"
          class="u-aspect--1-1"
        >
          <easing-preview/>
          <easing-edit v-if="step > 2" :show-grid="false"/>
        </div>
      </div>
      <div class="u-position-relative">
        <div
          v-if="step > 1"
          class="u-aspect--1-1"
        >
          <svg
            class="u-position-cover"
            viewBox="0 0 1 1"
            preserveAspectRatio="none"
          >
            <path
              class="eg-slide-linearToEasing-path"
              d="M0,0 L1,0"
            />
          </svg>
        </div>
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
    steps: { default: 3, type: Number },
  },
  watch: {
    active: function() {
      if (this.active) {
        const color1 = {
          h: 0,
          s: 0,
          l: 0,
          a: 1,
          hsv: {
            s: 0,
            v: 20,
          },
        }
        const color2 = {
          h: 0,
          s: 0,
          l: 80,
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
          deg: 90,
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
.eg-slide-linearToEasing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  & * {
    overflow: visible;
  }

  & > * {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > :nth-child(1) {
    background-color: var(--color1);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      bottom: 0;
      width: 2px;
      background-color: var(--color1);
    }
  }

  & > :nth-child(2) {
    background: linear-gradient(to right, var(--color1), var(--color2));

    &:hover {
      background: var(--gradientRGB);
    }
  }

  & > :nth-child(3) {
    background-color: var(--color2);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -1px;
      bottom: 0;
      width: 2px;
      background-color: var(--color2);
    }
  }
}

.eg-slide-linearToEasing-path {
  fill: none;
  stroke-width: var(--stroke-medium);
  stroke-linecap: round;
  stroke: currentColor;
  vector-effect: non-scaling-stroke;
}
</style>
