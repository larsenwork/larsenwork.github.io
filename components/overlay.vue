<template>
  <div
    :class="$store.state.overlayVisible ? 'is-visible' : ''"
    class="c-overlay"
    @click.stop="hideNavigation"
  />
</template>

<script>
export default {
  methods: {
    hideNavigation() {
      this.$store.commit('hideNavigation')
      this.$store.commit('hideOverlay')
    },
  },
}
</script>

<style lang="postcss">
.c-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  will-change: opacity;
  background-color: var(--color-themed-bg);
  transition: var(--transition);
  z-index: var(--zIndex-overlay);

  &.is-visible {
    visibility: visible;
    opacity: var(--opacity-high);
  }
}
</style>
