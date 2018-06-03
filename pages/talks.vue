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
    </section>
  </div>
</template>

<script>
export default {
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
