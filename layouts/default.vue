<template>
  <div>
    <app-menu/>
    <app-overlay/>
    <div
        class="layout"
        :class="$store.state.layoutDimmed ? 'is-dimmed' : ''">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import menu from '~/components/menu'
  import overlay from '~/components/overlay'

  export default {
    components: {
      'app-menu': menu,
      'app-overlay': overlay
    }
  }
</script>

<style lang="postcss">
  @import '../assets/css/main.css';
  .layout {
    display: flex;
    width: 100%;
    transition: var(--transition);

    &.is-dimmed {
      opacity: 0.1;
    }

    &>* {
      flex-basis: 100%;
      flex-shrink: 0;
      margin-right: -100%;
      min-height: 100vh;
    }
  }
</style>
