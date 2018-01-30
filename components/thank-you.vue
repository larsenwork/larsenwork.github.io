<template>
  <div>
    <h2>Thank you</h2>
    <p>Help me by
      <a :href="`https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterUrl}`">tweeting about it</a>,
      <a :href="`https://github.com/larsenwork/${repo}`">star/contribute on GitHub</a>
      or
      <a href="https://www.crowdrise.com/larsenwork-paying-it-forward">donate to my foundraiser</a>
      for Ethiopia Health Aid Inc.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tweetText: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      default: ''
    }
  },
  computed: {
    twitterText () {
      return encodeURI(`${this.tweetText} by @larsenwork`)
    },
    twitterUrl () {
      return encodeURI(`https://larsenwork${this.slug}`)
    }
  }
}
</script>

<style>

</style>
