<template>
  <div class="c-presentation">
    <prism language="javascript" label="CSSWG Proposal">{{ js }}</prism>
    <prism language="javascript" label="CSSWG Proposal">{{ js }}</prism>
  </div>
</template>

<script>
import prism from '~/components/prism'

export default {
  components: {
    prism,
  },
  data: function() {
    return {
      js: `// larsenwork.com
const test = false
this is a very long line which we normally shouldn't be using`,
    }
  },
}
</script>

<style lang="postcss">
</style>
