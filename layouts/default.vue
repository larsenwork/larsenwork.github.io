<template>
  <div>
    <div
        class="layout"
        :class="{
          'is-dimmed': $store.state.overlayVisible,
          'is-menuExpanded': $store.state.menuVisible
        }"
        >
      <nuxt/>
    </div>
    <app-notifications></app-notifications>
    <app-menu/>
    <app-overlay/>
  </div>
</template>

<script>
  import menu from '~/components/menu'
  import overlay from '~/components/overlay'
  import notifications from '~/components/notifications'

  export default {
    components: {
      'app-menu': menu,
      'app-overlay': overlay,
      'app-notifications': notifications
    }
  }
</script>

<style lang="postcss">
  @import '../assets/css/main.css';
  .layout {
    display: flex;
    width: 100%;

    &>* {
      flex-basis: 100%;
      flex-shrink: 0;
      margin-right: -100%;
      min-height: 100vh;
    }

    &.is-dimmed {
      user-select: none;
    }
  }
</style>
