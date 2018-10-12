<template>
  <transition
    name="tr-dropup"
  >
    <div
      v-if="notifications.length"
      class="c-notifications"
    >
      <transition
        name="tr-fade"
      >
        <div
          v-for="(notification, index) of notifications"
          :key="index"
          class="u-lineLength u-container"
        >
          {{ notification }}
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  data: function() {
    return {
      notifications: [],
    }
  },
}
</script>

<style lang="postcss">
@import '../assets/css/_settings.css';

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
