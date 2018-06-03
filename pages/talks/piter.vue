<template>
  <div class="c-presentation eg-slideshow">
    <slide :steps="4">
      <p v-if="step >= 1">{{ step }}</p>
      <p v-if="step >= 2">{{ step }}</p>
      <p v-if="step >= 3">{{ step }}</p>
      <p v-if="step >= 4">{{ step }}</p>
    </slide>
  </div>
</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [eagle.slideshow],
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    hsla(330, 100%, 50%, 0.4),
    steps(10, skip-none),
    hsla(210, 100%, 50%, 0.5)
  );
}
</style>
