<template>
  <div
    v-if="active"
    class="eg-slide"
  >
    <div v-if="step == 1" class="eg-slide-content u-grid eg-slide-momondo">
      <iframe class="c-iframe--scaled-more is-transparent" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256812/momondo_linear.html" />
    </div>
    <div v-if="step == 2" class="eg-slide-content u-grid u-grid--2-1">
      <iframe class="c-iframe--scaled-more is-transparent" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256812/momondo_linear.html" />
      <iframe class="c-iframe--scaled-more is-transparent" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256812/momondo.html" />
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import slideshowMethods from '~/components/mixins/slideshow'

export default {
  mixins: [eagle.slide, slideshowMethods],
  props: {
    steps: { default: 2, type: Number },
    id: { default: '', type: String },
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
.eg-slide-momondo {
  justify-content: unset !important;
}
</style>
