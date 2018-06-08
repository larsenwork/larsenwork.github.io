<template>
  <div
    class="p-talks"
  >
    <section
      class="p-index-section u-lineLength u-container u-section"
    >
      <h1>Talks</h1>
      <ul>
        <li>
          <nuxt-link
            to="/piter"
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
