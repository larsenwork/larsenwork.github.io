<template>
  <div
    :class="{
      'has-corgi': corgi,
      'has-wow': wow,
      'has-football': football,
      'is-live': $store.state.presentation.isLive
    }"
    class="c-presentation eg-slideshow"
  >
    <slide id="intro">
      <h1>Easing Gradients, the Squircle of Colors</h1>
      <p>Andreas Larsen<br>@larsenwork</p>
    </slide>
    <slide id="football" :steps="2">
      <iframe v-if="step == 2" class="is-transparent" src="https://www.youtube.com/embed/Z6szMwKsoX4?rel=0&autoplay=1&mute=1&controls=1&showinfo=0&start=12" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
    </slide>
    <slide id="helloWorld" :steps="2">
      <img :src="preloadedImages.corgi" class="corgi" >
      <h1 v-if="step == 1">piter.larsen.work</h1>
      <h1 v-if="step == 2">Hello World</h1>
    </slide>
    <slide id="me">
      <img :src="preloadedImages.habesha" class="u-cover" alt="">
    </slide>
    <slide id="blame">
      <h1>Blame typography</h1>
      <p>Also, people will notice!</p>
    </slide>
    <slide id="wow" :steps="6">
      <div v-if="step == 1 || step == 2">
        <h1>So why use gradients?</h1>
        <p>We want our users to say <span v-if="step == 2">wow</span><span v-else>...</span></p>
      </div>
      <div v-if="step == 3">
        <h1 class="is-emoji">👎</h1>
        <p>“Wow, that gradient on top of the picture is colorful”<br>&nbsp;</p>
      </div>
      <div v-if="step == 4">
        <h1 class="is-emoji">👍</h1>
        <p>“Wow, that is a nice and colorful picture”<br>&nbsp;</p>
      </div>
      <div v-if="step == 5">
        <h1 class="is-emoji">👎</h1>
        <p>“Wow, that gradient really helps me read the text above the picture.”</p>
      </div>
      <div v-if="step == 6">
        <h1 class="is-emoji">👍</h1>
        <p>“Wow, that text on top of the picture is very readable”<br>&nbsp;</p>
      </div>
    </slide>
    <slide id="nurse">
      <div class="eg-slide-gradient">
        <img :src="preloadedImages.nurse" class="u-cover " alt="">
      </div>
    </slide>
    <slide id="mason" :steps="2">
      <div v-if="step == 1" class="eg-slide-gradient">
        <img :src="preloadedImages.bricks" class="u-cover lucy">
      </div>
      <div v-if="step == 2" class="u-position-cover u-grid u-grid--2-1">
        <small class="u-position-cover small-label">Pictures by <a href="https://www.instagram.com/ghanavati/">@ghanavati</a></small>
        <img :src="preloadedImages.grundtvig_1" class="u-cover">
        <img :src="preloadedImages.grundtvig_2" class="u-cover">
      </div>
    </slide>
    <slide id="lucy" :steps="3">
      <img v-if="step == 1" :src="preloadedImages.lucy" class="u-cover lucy">
      <img v-if="step >= 2" :src="preloadedImages.savana" class="u-cover">
      <div v-if="step == 3" class="eg-slideshow-lion">🦁</div>
    </slide>
    <slide id="tiles" :steps="2">
      <h1 v-if="step == 1" class="shit">Hit<br>Shappens</h1>
      <img v-if="step == 2" :src="preloadedImages.tiles" class="u-cover">
    </slide>
    <slide id="eye">
      <img :src="preloadedImages.eye_anatomy" class="screenshot u-cover">
    </slide>
    <slide id="eye1">
      <img :src="preloadedImages.eye_photosensors" class="screenshot u-cover">
    </slide>
    <slide id="eye2">
      <img :src="preloadedImages.eye_receptive" class="screenshot u-cover">
    </slide>
    <slide id="momondo-a">
      <div class="eg-slide-scroll">
        <img :src="preloadedImages.momondo_linear">
      </div>
    </slide>
    <slide id="mistakes">
      <div class="eg-slide-scroll">
        <p>Sometimes we need designers to make “mistakes” that developers are then challenged to solve (in new ways).</p>
      </div>
    </slide>
    <slide id="bob">
      <img :src="preloadedImages.bob" class="u-cover bob">
    </slide>
    <slide id="momondo-b">
      <div class="u-grid u-grid--2-1">
        <div class="eg-slide-scroll">
          <img :src="preloadedImages.momondo_linear">
        </div>
        <div class="eg-slide-scroll">
          <img :src="preloadedImages.momondo_ease">
        </div>
      </div>
    </slide>
    <linear-to-easing id="easeDemo" />
    <slide>
      <iframe
        src="https://codepen.io/larsenwork/live/bf62b78d1c3cba51a00101e21ddaa025"
        style="background-color:transparent;"
      />
    </slide>
    <slide id="tell the world">
      <h1 class="is-emoji">🗣</h1>
      <p>Our ideas are worthless if we dont share them.<br>
        Also, I am a n00b so if I can do it anybody can</p>
    </slide>
    <slide id="css tricks" :steps="3">
      <iframe v-if="step == 1" src="https://css-tricks.com/easing-linear-gradients/" />
      <img v-if="step == 2" :src="preloadedImages.twitter" class="u-cover twitter">
      <img v-if="step == 3" :src="preloadedImages.csswg" class="u-cover twitter">
    </slide>
    <slide id="syntax me">
      <prism language="css" label="My Needs">{{ myCSS }}</prism>
    </slide>
    <slide id="syntax meyer">
      <prism language="css" label="Eric Meyer">{{ meyerCSS }}</prism>
    </slide>
    <slide id="syntax amelia" :steps="3">
      <prism v-if="step == 1" language="css" label="Amelia Bellamy-Royds">{{ futureCSS }}</prism>
      <prism v-if="step == 2" language="css" label="Amelia Bellamy-Royds">{{ futureCSS1 }}</prism>
      <prism v-if="step == 3" language="css" label="Amelia Bellamy-Royds">{{ futureCSS2 }}</prism>
    </slide>
    <slide id="larsenwork">
      <h1>larsenwork.com/easing-gradients</h1>
    </slide>
    <slide id="color">
      <h1>RGB and LRGB</h1>
      <p>All about the gamma correction</p>
    </slide>
    <slide id="eye discarge">
      <img :src="preloadedImages.eye_discharge" class="screenshot u-cover">
    </slide>
    <slide id="eye gamma">
      <img :src="preloadedImages.eye_brightness" class="screenshot u-cover">
    </slide>
    <blur id="blur" />
    <gamma-correction id="gamma" />
    <slide id="helmholz1">
      <img :src="preloadedImages.corgi" class="corgi" >
      <h1>Helmholtz–Kohlrausch</h1>
      <p>Even when they have the same luminance, colored lights seem brighter than white light does.</p>
    </slide>
    <helmholz id="helmholz2" />
    <color-spaces-demo id="color-spaces" />
    <slide id="lab">
      <h1>Just use LAB</h1>
    </slide>
    <slide id="demo time">
      <h1>Demo / Code</h1>
    </slide>
    <slide>
      <div class="u-position-cover u-grid u-grid--2-2">
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
          src="http://jamie-wong.com/post/color/"
        />
        <iframe
          class="c-iframe--scaled"
          src="https://larsenwork.com/"
          style="background-color:transparent;"
        />
      </div>
    </slide>
    <slide id="colorzilla">
      <iframe src="http://www.colorzilla.com/gradient-editor/" frameborder="0" />
    </slide>
    <slide id="finito">
      <h1>The End</h1>
      <p>@larsenwork</p>
    </slide>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'
import slideshowMethods from '~/components/mixins/slideshow'
import prism from '~/components/prism'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'
import images from '~/components/piter/images'

import {
  linearToEasing,
  colorSpacesDemo,
  blur,
  gammaCorrection,
  helmholz,
} from '~/components/slides'

export default {
  components: {
    prism,
    linearToEasing,
    colorSpacesDemo,
    blur,
    gammaCorrection,
    helmholz,
  },
  mixins: [Slideshow, slideshowMethods, gradientOutput],
  props: {
    mouseNavigation: { default: false, type: Boolean },
    // backBySlide: { default: true, type: Boolean },
  },
  data: function() {
    return {
      step: 1,
      corgi: false,
      wow: false,
      football: false,
      preloadedImages: {
        ...images,
      },
    }
  },
  computed: {
    myCSS: function() {
      return `#noobMe {
  background: ease-in-out-gradient(
    to bottom,
    #bada55 0%,
    transparent 100%);
  background: scrim-gradient(
    to bottom,
    #bada55 0%,
    transparent 100%);
};`
    },
    meyerCSS: function() {
      return `#mrReset {
  background: linear-gradient(
    to bottom,
    black 0%,
    transparent 100% ease-in-out
  );
};`
    },
    futureCSS: function() {
      return `#future {
  background: linear-gradient(
    ${this.gradientDirection},
    ${this.gradientColor1},
    ${this.gradientFunction},
    ${this.gradientColor2}
  );
};`
    },
    futureCSS1: function() {
      return `#future {
  background: linear-gradient(
    ${this.gradientDirection},
    ${this.gradientColor1},
    steps(4, skip-none),
    ${this.gradientColor2}
  );
};`
    },
    futureCSS2: function() {
      return `#future {
  background: linear-gradient(
    ${this.gradientDirection},
    ${this.gradientColor1},
    ease-in-out,
    ${this.gradientColor2}
  );
};`
    },
  },
  watch: {
    step: function() {
      const wowSlides = ['wow']
      this.wow =
        wowSlides.includes(this.currentSlide.$attrs.id) && this.step >= 2
    },
    currentSlide: function() {
      this.corgi = false
      this.football = false
      this.wow = false
      if (this.currentSlide.$attrs.id) {
        this.updateSlideId(this.currentSlide.$attrs.id)
        const corgiSlides = ['intro', 'mistakes', 'lab', 'helloWorld']
        this.corgi = corgiSlides.includes(this.currentSlide.$attrs.id)
        const footballSlides = ['football', 'finito']
        this.football = footballSlides.includes(this.currentSlide.$attrs.id)
      }
    },
    currentSlideIndex: function(index) {
      this.updateUrlQuery(index)
    },
  },
  mounted: function() {
    setTimeout(this.jumpToSlide(), 200)
  },
  destroyed: function() {
    this.$store.state.presentation.isLive = false
  },
  methods: {
    updateUrlQuery(index) {
      this.$router.push({ name: 'talks-piter', query: { slide: index } })
    },
    jumpToSlide() {
      if (this.$route.query.slide) {
        const slideIndex = this.$route.query.slide
        console.log(this.slides)
        this.slides.forEach(slide => (slide.active = false))
        console.log(this.slides)
        this.currentSlideIndex = slideIndex
        this.currentSlide = this.slides[slideIndex - 1]
      }
      this.$store.state.presentation.isLive = true
    },
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
  --defaultGradient: linear-gradient(
    to bottom right,
    hsl(210, 100%, 45%),
    steps(10, skip-none),
    hsl(330, 100%, 45%)
  );
}

.c-presentation {
  height: 100vh;
  width: 100vw;
  padding: var(--spacer-medium);
  opacity: 0;
  will-change: opacity;
  transition: var(--transition);
  background-image: linear-gradient(
    to bottom right,
    hsla(210, 10%, 16%, 1),
    steps(10, skip-none),
    hsla(210, 10%, 4%, 1)
  );

  & * {
    font-family: 'piter', sans-serif;
    font-size: 4vw;
    line-height: 1;
  }

  & small {
    font-size: 80%;
  }

  & pre,
  & code {
    font-family: 'piter-mono', monospace;
  }

  & h1 {
    font-family: 'Gidole', sans-serif;
    font-size: 8.8vw;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-left: -0.06em;
  }

  &.is-live {
    opacity: 1;
  }

  &.has-corgi {
    background-image: var(--defaultGradient),
      linear-gradient(
        to bottom right,
        hsla(210, 100%, 45%, 0.5),
        hsla(330, 100%, 45%, 0.5)
      ),
      url('https://i.imgur.com/q0tMNDP.gif');
    background-blend-mode: multiply, normal;
    background-size: cover;
  }

  &.has-wow {
    background-image: var(--defaultGradient),
      linear-gradient(
        to bottom right,
        hsla(210, 100%, 45%, 0.5),
        hsla(330, 100%, 45%, 0.5)
      ),
      url('https://imgur.com/wFKEUJ2.gif');
    background-blend-mode: multiply, normal;
    background-size: cover;
  }

  &.has-football {
    background-image: var(--defaultGradient),
      linear-gradient(
        to bottom right,
        hsla(210, 100%, 45%, 0.5),
        hsla(330, 100%, 45%, 0.5)
      ),
      url('https://imgur.com/hEP4l2G.jpg');
    background-blend-mode: multiply, normal;
    background-size: cover;
    background-position: bottom center;
  }

  & .corgi {
    position: fixed;
    top: -1vmin;
    right: -1vmin;
    width: 25vmin;
    pointer-events: none;
    z-index: 1000;
    animation-iteration-count: 1;
    animation-fill-mode: both;
    animation-duration: 4s;
    animation-delay: 0.1s;
    animation-name: corgi;
  }

  & .shit {
    font-size: 15vw;
    line-height: 1;
  }

  & .lucy {
    object-fit: contain;
  }

  & .screenshot {
    object-fit: contain !important;
  }

  & .bob {
    object-position: bottom center;
  }

  & .twitter {
    object-position: top center;
  }

  & .small-label {
    padding-top: var(--spacer-xsmall);
    padding-left: var(--spacer-small);

    & a {
      color: var(--color-brand);
    }
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
