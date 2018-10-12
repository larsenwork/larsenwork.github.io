<template>
  <chevron-down-icon
    class="u-icon c-selectChevron"
  />
</template>

<script>
import { ChevronDownIcon } from 'vue-feather-icons'

export default {
  components: {
    ChevronDownIcon,
  },
}
</script>

<style lang="postcss">
@import '../assets/css/_settings.css';

.c-selectChevron {
  position: absolute;
  right: var(--spacer-xsmall);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>
