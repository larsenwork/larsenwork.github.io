<template>
  <transition name="tr-dropup">
    <div
        class="c-notifications"
        v-if="messages.length"
        >
      <transition name="tr-fade">
        <div
            v-for="(message, index) of messages"
            v-if="message !== ''"
            :key="index"
            class="u-lineLength u-container"
            >
          {{ message }}
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import gradientOutput from '~/components/mixins/gradient-output'

const uppercaseFirst = str => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  mixins: [gradientOutput],
  data: function () {
    return {
      notifications: []
    }
  },
  computed: {
    messages () {
      return [...this.notifications, this.editorValue].filter(str => str !== '')
    },
    editorValue () {
      const editor = this.$store.state.gradient.editorActive
      return editor === ''
        ? ''
        : this['gradient' + uppercaseFirst(editor)]
    }
  }
}
</script>

<style lang="postcss">
.c-notifications {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding-top: var(--spacer-xsmall);
  padding-bottom: var(--spacer-xsmall);
  background-color: var(--color-themed-bg);
  z-index: var(--zIndex-notification);
  box-shadow: var(--shadow);
}
</style>
