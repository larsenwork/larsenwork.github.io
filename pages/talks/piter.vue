<template>
  <div
    :style="{
      '--rotation': `${rotation}deg`,
    }"
    class="c-presentation eg-slideshow"
  >
    <linear-to-easing />
    <slide>
      <h1>Easing Gradients, the Squircle of Colors</h1>
      <p>@larsenwork<br>Devsigner<br>Cph, Denmark</p>
    </slide>
    <slide>
      <div class="eg-iframe">
        <iframe src="http://www.colorzilla.com/gradient-editor/" frameborder="0" />
      </div>
    </slide>
    <slide :steps="4">
      <prism language="javascript" label="CSSWG Proposal">{{ js }}</prism>
      <p v-if="step >= 1">{{ step }}</p>
      <p v-if="step >= 2">{{ step }}</p>
      <p v-if="step >= 3">{{ step }}</p>
      <p v-if="step >= 4">{{ step }}</p>
    </slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'
import prism from '~/components/prism'
import linearToEasing from '~/components/slides/linear-to-easing'

export default {
  components: {
    prism,
    linearToEasing,
  },
  mixins: [eagle.slideshow],
  props: {
    mouseNavigation: { default: false, type: Boolean },
  },
  data: function() {
    return {
      rotation: -90,
      js: `// larsenwork.com
const test = false
this is a very long line which we normally shouldn't be using`,
      preloadedImages: {
        hiThere: 'http://i.imgur.com/ZLT46UN.jpg',
      },
    }
  },
  created() {
    const duration = 1
    const resolution = 0.25
    setInterval(() => {
      this.rotation = this.rotation + 1 * resolution
    }, duration * 60 * 1000 * resolution / 360)
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
}

.c-presentation {
  font-family: 'piter', sans-serif;
  height: 100vh;
  width: 100vw;
  padding: var(--spacer-xsmall);
  background-image: linear-gradient(
    var(--rotation),
    hsla(0, 0%, 12%, 1),
    steps(10, skip-none),
    hsla(0, 0%, 8%, 1)
  );
}
</style>
