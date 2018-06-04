<template>
  <div
    v-if="active"
    class="eg-slide"
  >
    <div class="eg-slide-content eg-slide-linearToEasing">
      <div class="u-position-relative">
        <div
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
          class="u-aspect--1-1"
        >
          <easing-preview/>
          <easing-edit v-if="step >3" :show-grid="false"/>
        </div>
      </div>
      <div class="u-position-relative">
        <div
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

export default {
  components: {
    easingEdit,
    easingPreview,
  },
  mixins: [eagle.slide],
  props: {
    steps: { default: 5, type: Number },
  },
}
</script>

<style lang="postcss">
.eg-slide-linearToEasing {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;

  & * {
    overflow: visible;
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
