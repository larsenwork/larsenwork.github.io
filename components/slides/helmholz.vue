<template>
  <div
    v-if="active"
    class="eg-slide"
  >
    <div class="eg-slide-content eg-slide-helmholz u-grid">
      <img :src="images.corgi" class="corgi" >
      <input
        v-model="greyscale"
        type="range"
        min="0"
        max="1"
        step="0.01"
        @change="updateGrayscale(greyscale)"
      >
      <div class="greys">
        <div class="grey1" />
        <div class="grey2" />
        <div class="grey3" />
        <div class="grey4" />
        <div class="grey5" />
      </div>
      <svg>
        <filter id="grayscaler">
          <feColorMatrix :values="greyscale" type="saturate" />
        </filter>
      </svg>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'
import slideshowMethods from '~/components/mixins/slideshow'
import images from '~/components/piter/images'

export default {
  mixins: [eagle.slide, gradientOutput, slideshowMethods],
  props: {
    id: { default: '', type: String },
  },
  data: function() {
    return {
      greyscale: 1,
      images,
    }
  },
  watch: {
    active: function() {
      if (this.active) {
        this.updateSlideId(this.id)
      }
    },
  },
}
</script>

<style lang="postcss">
.eg-slide-helmholz {
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

  & input {
    max-width: 30vw;
    display: block;
    margin: 0 auto;

    &:focus {
      outline: 0px solid transparent;
      box-shadow: none;
    }
  }

  & .greys {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(128, 128, 128);

    & > * {
      filter: url('#grayscaler');
      width: 15vmin;
      height: 15vmin;
    }

    & .grey1 {
      background-color: rgb(245, 0, 0);
    }
    & .grey2 {
      background-color: rgb(130, 131, 0);
    }
    & .grey3 {
      background-color: rgb(0, 140, 0);
    }
    & .grey4 {
      background-color: rgb(186, 0, 255);
    }
    & .grey5 {
      background-color: rgb(0, 137, 255);
    }
  }
}
</style>
