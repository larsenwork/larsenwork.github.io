<template>
  <div
      class="c-overlay"
      :class="$store.state.overlayVisible ? 'is-visible' : ''"
      @click.stop="hideMenu"
      >
  </div>
</template>

<script>
  export default {
    methods: {
      hideMenu () {
        this.$store.commit('hideMenu')
        this.$store.commit('hideOverlay')
        this.$store.commit('hideGradientEditor')
      }
    }
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

    &:not(.is-visible) {
      transition-delay: 0.1s;
    }
  }
</style>
