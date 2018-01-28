<template>
  <div>
    <h2>Thank you</h2>
    <p>Help me by <a :href="tweetLink">tweeting about it</a>, <a :href="`https://github.com/larsenwork/${repo}`">star/contribute on GitHub</a> or <a href="https://www.crowdrise.com/larsenwork-paying-it-forward">donate to my foundraiser</a> for Ethiopia Health Aid Inc.</p>
  </div>
</template>

<script>
export default {
  props: {
    tweetText: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      default: ''
    }
  },
  computed: {
    tweetLink () {
      const text = encodeURIComponent(this.tweetText + ' by @larsenwork')
      const url = encodeURIComponent('https://larsenwork' + this.path)
      return `https://twitter.com/intent/tweet?text=${text}&url=${url}`
    }
  }
}
</script>

<style>

</style>
