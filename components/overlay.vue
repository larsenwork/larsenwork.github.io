<template>
  <div
      class="c-overlay"
      :class="$store.state.layoutDimmed ? 'is-visible' : ''"
      @click="$store.commit('hideMenu')"
      >
  </div>
</template>

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
    background-color: var(--color);
    transition: var(--transition);
    z-index: var(--zIndex-overlay);

    &.is-visible {
      visibility: visible;
      opacity: var(--opacity-low);
    }

    &:not(.is-visible) {
      transition-delay: 0.1s;
    }
  }
</style>
