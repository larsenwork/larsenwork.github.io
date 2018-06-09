<template>
  <div
    :class="{
      'has-corgi': corgi,
      'has-wow': wow,
      'has-football': football,
    }"
    class="c-presentation eg-slideshow"
  >
    <slide id="intro" >
      <h1>Easing Gradients, the Squircle of Colors</h1>
      <p>Andreas Larsen<br>@larsenwork<br>piter.larsen.work</p>
    </slide>
    <slide id="football" />
    <slide id="intro" >
      <h1>Easing Gradients, the Squircle of Colors</h1>
      <p>Andreas Larsen<br>@larsenwork<br>piter.larsen.work</p>
    </slide>
    <slide id="helloWorld" :steps="2">
      <h1 v-if="step == 1">piter.larsen.work</h1>
      <h1 v-if="step == 2">Hello World</h1>
      <img src="/images/piter/corgi.png" class="corgi" >
    </slide>
    <slide id="me">
      <img src="/images/piter/me.jpg" class="u-cover" alt="">
    </slide>
    <slide id="blame">
      <h1>Blame typography</h1>
      <p>Also, people will notice!</p>
    </slide>
    <slide id="wow" :steps="5">
      <div v-if="step == 2">
        <h1 class="is-emoji">👎</h1>
        <p>“Wow, that gradient on top of the picture is colorful”<br>&nbsp;</p>
      </div>
      <div v-if="step == 3">
        <h1 class="is-emoji">👍</h1>
        <p>“Wow, that is a nice and colorful picture”<br>&nbsp;</p>
      </div>
      <div v-if="step == 4">
        <h1 class="is-emoji">👎</h1>
        <p>“Wow, that gradient really helps me read the text above the picture.”</p>
      </div>
      <div v-if="step == 5">
        <h1 class="is-emoji">👍</h1>
        <p>“Wow, that text on top of the picture is very readable”<br>&nbsp;</p>
      </div>
    </slide>
    <slide id="nurse">
      <div class="eg-slide-gradient">
        <img src="/images/piter/nurse.jpg" class="u-cover " alt="">
      </div>
    </slide>
    <slide id="mason" :steps="2">
      <div v-if="step == 1" class="eg-slide-gradient">
        <img src="/images/piter/bricklaying.jpg" class="u-cover lucy">
      </div>
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
    <slide id="tiles" :steps="2">
      <h1 v-if="step == 1" class="shit">Hit<br>Shappens</h1>
      <img v-if="step == 2" src="/images/piter/tiles.jpg" class="u-cover">
    </slide>
    <slide id="eye">
      <img src="/images/piter/eye.jpg" class="screenshot u-cover">
    </slide>
    <slide id="eye1">
      <img src="/images/piter/eye-receptive.jpg" class="screenshot u-cover">
    </slide>
    <slide id="eye2">
      <img src="/images/piter/eye-signal.jpg" class="screenshot u-cover">
    </slide>
    <slide id="momondo-a">
      <div class="eg-slide-scroll">
        <img src="/images/piter/momondo-a.png">
      </div>
    </slide>
    <slide id="mistakes">
      <div class="eg-slide-scroll">
        <p>Sometimes we need designers to make “mistakes” that developers are then challenged to solve (in new ways).</p>
      </div>
    </slide>
    <slide id="bob">
      <img src="/images/piter/bob.png" class="u-cover bob">
    </slide>
    <slide id="momondo-b">
      <div class="u-grid u-grid--2-1">
        <div class="eg-slide-scroll">
          <img src="/images/piter/momondo-a.png">
        </div>
        <div class="eg-slide-scroll">
          <img src="/images/piter/momondo-b.png">
        </div>
      </div>
    </slide>
    <linear-to-easing id="easeDemo" />
    <slide id="tell the world">
      <h1 class="is-emoji">🗣</h1>
      <p>Our ideas are worthless if we dont share them.</p>
    </slide>
    <slide id="css tricks" :steps="3">
      <iframe v-if="step == 1" src="https://css-tricks.com/easing-linear-gradients/" />
      <img v-if="step == 2" src="/images/piter/twitter.jpg" class="u-cover twitter">
      <img v-if="step == 3" src="/images/piter/github.jpg" class="u-cover twitter">
    </slide>
    <slide id="syntax me">
      <prism language="css" label="My Needs">{{ myCSS }}</prism>
    </slide>
    <slide id="syntax meyer">
      <prism language="css" label="Eric Meyer">{{ meyerCSS }}</prism>
    </slide>
    <slide id="syntax amelia" :steps="3">
      <prism v-if="step == 1" language="css" label="AmeliaBR">{{ futureCSS }}</prism>
      <prism v-if="step == 2" language="css" label="AmeliaBR">{{ futureCSS1 }}</prism>
      <prism v-if="step == 3" language="css" label="AmeliaBR">{{ futureCSS2 }}</prism>
    </slide>
    <slide id="color">
      <h1>RGB and LRGB</h1>
      <p>All about the gamma correction</p>
    </slide>
    <slide id="eye discarge">
      <img src="/images/piter/eye-discarge.jpg" class="screenshot u-cover">
    </slide>
    <slide id="eye gamma">
      <img src="/images/piter/gamma.png" class="screenshot u-cover">
    </slide>
    <blur id="blur" />
    <gamma-correction id="gamma" />
    <slide id="helmholz1">
      <img src="/images/piter/corgi.png" class="corgi" >
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
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'
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
  mixins: [eagle.slideshow, slideshowMethods, gradientOutput],
  props: {
    mouseNavigation: { default: false, type: Boolean },
    // backBySlide: { default: true, type: Boolean },
  },
  data: function() {
    return {
      corgi: false,
      wow: false,
      js: `// larsenwork.com
const test = false
this is a very long line which we normally shouldn't be using`,
      // preloadedImages: {
      //   ...images,
      // },
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
    currentSlide: function() {
      if (this.currentSlide.$attrs.id) {
        this.updateSlideId(this.currentSlide.$attrs.id)
        const corgiSlides = ['intro', 'mistakes', 'lab']
        this.corgi = corgiSlides.includes(this.currentSlide.$attrs.id)
        const wowSlides = ['wow']
        this.wow = wowSlides.includes(this.currentSlide.$attrs.id)
        const footballSlides = ['football']
        this.football = footballSlides.includes(this.currentSlide.$attrs.id)
      } else {
        this.corgi = false
        this.wow = false
        this.football = false
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
  --fontSize-h1: 2.2rem;
  --lineHeight-body: 1.3rem;
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
  padding: var(--spacer-xsmall);
  background-image: linear-gradient(
    to bottom right,
    hsla(210, 10%, 16%, 1),
    steps(10, skip-none),
    hsla(210, 10%, 4%, 1)
  );

  & h1 {
    font-family: 'Gidole', sans-serif;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-left: -0.06em;
  }

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

  &.has-wow {
    background-image: var(--defaultGradient),
      linear-gradient(
        to bottom right,
        hsla(210, 100%, 45%, 0.5),
        hsla(330, 100%, 45%, 0.5)
      ),
      url('/images/piter/wow.png');
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
      url('/images/piter/hummel.jpg');
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
    animation-delay: 1s;
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
