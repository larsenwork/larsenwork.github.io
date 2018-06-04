<template>
  <div
    class="p-talks"
  >
    <template v-if="$store.state.presentation.isLive">
      <nuxt-child/>
    </template>
    <section
      v-else
      class="p-index-section u-lineLength u-container u-section"
    >
      <h1>Talks</h1>
      <ul>
        <li
          v-for="talk of talks"
          :key="talk"
        >
          <nuxt-link
            :to="`/${$route.path}/${talk}`"
            class="c-navigation-link"
          >
            {{ talk }}
          </nuxt-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    talks() {
      const files = require.context('./talks', true, /\.vue$/)
      const filenames = files
        .keys()
        .map(name => name.replace('./', '').replace('.vue', ''))
      return filenames
    },
  },
  mounted: function() {
    this.$store.state.presentation.isLive =
      this.$route.path.split('/').length > 2
  },
  transition() {
    return {
      mode: '',
    }
  },
}
</script>

<style>
.p-talks {
  /* Placeholder */
}
</style>
