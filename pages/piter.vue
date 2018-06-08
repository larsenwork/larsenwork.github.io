<template>
  <div
    :class="{ 'has-corgi': corgi }"
    class="c-presentation eg-slideshow"
  >
    <!-- <div
      class="c-presentation eg-slideshow"
    > -->
    <slide id="intro" >
      <h1>Easing Gradients, the Squircle of Colors</h1>
      <p>Andreas Larsen<br>@larsenwork</p>
    </slide>
    <slide id="helloWorld" :steps="2">
      <h1 v-if="step == 1">piter.larsen.work</h1>
      <h1 v-if="step == 2">Hello World</h1>
      <img src="/images/piter/corgi.png" class="corgi" >
    </slide>
    <slide id="me" :steps="2">
      <img v-if="step == 1" src="/images/piter/me.jpg" class="u-cover" alt="">
      <div v-if="step == 2" class="eg-slide-gradient">
        <img src="/images/piter/nurse.jpg" class="u-cover " alt="">
      </div>
    </slide>
    <slide id="mason" :steps="2">
      <div v-if="step == 1" class="eg-slide-gradient">
        <img src="/images/piter/bricklaying.jpg" class="u-cover lucy">
      </div>
      <!-- <iframe v-if="step == 1" class="is-transparent" src="https://www.youtube.com/embed/3XD3DDWrt6Q?rel=0&autoplay=1&mute=1&controls=0&showinfo=0&start=200&end=250" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen /> -->
      <div v-if="step == 2" class="u-position-cover u-grid u-grid--2-1">
        <img src="/images/piter/grundtvig1.jpg" class="u-cover">
        <img src="/images/piter/grundtvig2.jpg" class="u-cover">
      </div>
    </slide>
    <slide id="lucy" :steps="3">
      <img v-if="step == 1" src="/images/piter/lucy.jpg" class="u-cover lucy">
      <img v-if="step >= 2" src="/images/piter/savanna.jpg" class="u-cover">
      <div v-if="step == 3" class="eg-slideshow-lion">🦁</div>
    </slide>
    <slide id="medical" :steps="2">
      <h1 v-if="step == 1" class="shit">Hit<br>Shappens</h1>
      <img v-if="step == 2" src="/images/piter/tiles.jpg" class="u-cover">
      <!-- Some things about tiles and then rods / ganglion potential. -->
    </slide>
    <momondo id="momondo" />
    <linear-to-easing id="easeDemo" />
    <slide :steps="2">
      <prism language="javascript" label="CSSWG Proposal">{{ js }}</prism>
      <p v-if="step >= 0">{{ step }}</p>
    </slide>
    <color-spaces-demo />
    <blur />
    <gamma-correction />
    <slide :steps="2">
      <div class="u-position-cover u-grid u-grid--2-2">
        <template
          v-if="step == 1"
        >
          <iframe
            class="c-iframe--scaled"
            src="http://gka.github.io/chroma.js/"
          />
          <iframe
            class="c-iframe--scaled"
            src="http://pomax.github.io/bezierjs/"
          />
          <iframe
            class="c-iframe--scaled"
            src="https://zulko.github.io/eaglejs-demo/"
          />
        </template>
        <template
          v-if="step == 2"
        >
          <iframe
            class="c-iframe--scaled"
            src="http://jamie-wong.com/post/color/"
            style="background-color:transparent;"
          />
          <iframe
            class="c-iframe--scaled"
            src="https://larsenwork.com/"
            style="background-color:transparent;"
          />
        </template>
      </div>
    </slide>
    <slide id="colorzilla">
      <iframe src="http://www.colorzilla.com/gradient-editor/" frameborder="0" />
    </slide>
    <slide>
      <h1>The End</h1>
      <p>@larsenwork</p>
    </slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import slideshowMethods from '~/components/mixins/slideshow'
import prism from '~/components/prism'
import {
  linearToEasing,
  colorSpacesDemo,
  momondo,
  blur,
  gammaCorrection,
} from '~/components/slides'

export default {
  components: {
    prism,
    linearToEasing,
    colorSpacesDemo,
    momondo,
    blur,
    gammaCorrection,
  },
  mixins: [eagle.slideshow, slideshowMethods],
  props: {
    mouseNavigation: { default: false, type: Boolean },
    // backBySlide: { default: true, type: Boolean },
  },
  data: function() {
    return {
      corgi: false,
      js: `// larsenwork.com
const test = false
this is a very long line which we normally shouldn't be using`,
      // preloadedImages: {
      //   ...images,
      // },
    }
  },
  watch: {
    currentSlide: function() {
      if (this.currentSlide.$attrs.id) {
        this.updateSlideId(this.currentSlide.$attrs.id)
        this.corgi = this.currentSlide.$attrs.id === 'intro'
      }
    },
  },
  mounted: function() {
    this.$store.state.presentation.isLive = true
  },
}
</script>

<style lang="postcss">
@font-face {
  font-family: 'piter';
  src: url('/fonts/piter-regular.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'piter-mono';
  src: url('/fonts/piter-mono.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

:root {
  --font-family: 'piter', sans-serif;
  --font-family-mono: 'piter-mono', monospace;
  --fontSize-html: 4vw;
  --fontSize-h1: 2.5rem;
  --lineHeight-body: 1.3rem;
  --defaultGradient: linear-gradient(
    to bottom right,
    hsl(210, 100%, 45%),
    steps(10, skip-none),
    hsl(330, 100%, 45%)
  );
}

.c-presentation {
  font-family: 'piter', sans-serif;
  height: 100vh;
  width: 100vw;
  padding: var(--spacer-xsmall);
  background-image: linear-gradient(
    to bottom right,
    hsla(210, 10%, 16%, 1),
    steps(10, skip-none),
    hsla(210, 10%, 4%, 1)
  );

  &.has-corgi {
    background-image: var(--defaultGradient),
      linear-gradient(
        to bottom right,
        hsla(210, 100%, 45%, 0.5),
        hsla(330, 100%, 45%, 0.5)
      ),
      url('/images/piter/corgi-big.png');
    background-blend-mode: multiply, normal;
    background-size: cover;
  }

  & .corgi {
    position: fixed;
    top: -5vmin;
    right: -5vmin;
    width: 15vmin;
    pointer-events: none;
    z-index: 1000;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    animation-duration: 4s;
    animation-delay: 1s;
    animation-name: corgi;
  }

  & .shit {
    font-family: -apple-system, BlinkMacSystemFont;
    font-size: 15vw;
  }

  & .lucy {
    object-fit: contain;
  }
}
@keyframes corgi {
  0%,
  40%,
  80% {
    opacity: 0;
    transform: scale(1);
  }
  20%,
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform-origin: top right;
    transform: scale(0.5);
  }
}
</style>
