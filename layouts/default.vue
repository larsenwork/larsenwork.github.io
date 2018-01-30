<template>
  <div>
    <div
        class="layout"
        :class="{
          'is-dimmed': $store.state.overlayVisible,
          'is-moused': $store.state.mouseElement
        }"
        >
      <githubCorner/>
      <nuxt/>
    </div>
    <notifications/>
    <navigation/>
    <overlay/>
  </div>
</template>

<script>
import navigation from '~/components/navigation'
import overlay from '~/components/overlay'
import notifications from '~/components/notifications'
import githubCorner from '~/components/github-corner'

export default {
  components: {
    navigation,
    overlay,
    notifications,
    githubCorner
  }
}
</script>

<style lang="postcss">
  @import '../assets/css/main.css';
  .layout {
    display: flex;
    width: 100%;
    overflow-x: hidden;

    & > [class^="p-"] {
      flex-basis: 100%;
      flex-shrink: 0;
      max-width: 100%;
      margin-right: -100%;
      min-height: 100vh;
    }

    &.is-dimmed,
    &.is-moused {
      user-select: none;
    }
  }
</style>
