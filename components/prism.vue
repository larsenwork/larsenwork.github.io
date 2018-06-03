<template>
  <div class="u-position-relative c-prism">
    <h3 class="t-codeLabel">{{ label }}</h3>
    <prism :language="language">
      <slot/>
    </prism>
  </div>
</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'

export default {
  components: {
    Prism,
  },
  props: {
    language: {
      default: 'javascript',
      type: String,
    },
    label: {
      default: 'Javascript',
      type: String,
    },
  },
}
</script>

<style lang="postcss">
*:not(h1):not(h2) + .c-prism {
  margin-top: var(--lineHeight-margin-small);
}

.c-prism {
  & .selector,
  & .keyword {
    color: var(--color-brand-alt);
  }
  & .function {
    color: var(--color-brand);
  }
  & .comment {
    opacity: var(--opacity-mid);
  }
  & code {
    color: var(--color-themed-fg-72);
  }
}
</style>
