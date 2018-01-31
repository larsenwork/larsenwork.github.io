<template>
  <nav
      class="c-navigation"
      :class="$store.state.navigationVisible ? 'is-expanded' : ''"
      >
  </nav>
</template>

<script>
import social from '~/components/social'
export default {
  components: {
    'app-social': social
  },
  methods: {
    toggleNavigation () {
      if (this.$store.state.navigationVisible) {
        this.hideNavigation()
      } else {
        this.$store.commit('showNavigation')
        this.$store.commit('showOverlay')
      }
    },
    hideNavigation () {
      this.$store.commit('hideNavigation')
      this.$store.commit('hideOverlay')
    }
  }
}
</script>

<style lang="postcss">
@import '../assets/css/_media.css';

:root {
  --expand-transitionDuration: 0.6s;
}

.c-navigation {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  color: var(--color-bright);
  z-index: var(--zIndex-nav);
  display: flex;
  justify-content: center;
  padding-bottom: var(--spacer-large);
  pointer-events: none;
  text-align: center;

  &.is-expanded {
    pointer-events: auto;
  }
}

.c-navigation-links {
  visibility: hidden;
  opacity: 0;
  will-change: opacity;
  padding: var(--spacer-small);
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  transition: var(--transition);

  @media (--medium) {
    grid-template-columns: repeat(6, 1fr);
  }

  @nest .c-navigation.is-expanded & {
    transition: 0.2s var(--transitionFunction) calc(var(--expand-transitionDuration) - 0.1s);
    visibility: visible;
    opacity: 1;
  }
}

.c-navigation-links-header {
  color: var(--color-dark);
  margin-top: var(--lineHeight-margin-small);
  margin-bottom: var(--lineHeight-margin-xsmall);
  opacity: var(--opacity-high);
}

.c-navigation-links-column {
  @media (--medium) {
    grid-column: span 2;
  }
}

.c-navigation-links-donate {
  @media (--medium) {
    grid-column: span 3;
  }
}

.c-navigation-links-social {
  grid-column: span 2;

  @media (--medium) {
    grid-column: span 3;
  }
}

.c-navigation-link {
  color: var(--color-bright);
  text-decoration: none;
  display: block;
}

.c-navigation-link--wip {
  opacity: var(--opacity-low);
  text-decoration: line-through;
}

.c-navigation-toggle {
  position: absolute;
  right: var(--spacer-small);
  bottom: var(--spacer-small);
  width: var(--spacer-large);
  height: var(--spacer-large);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  fill: var(--color-brand);
  will-change: transform;
  animation: fade-up var(--transitionDuration) ease 1s backwards;

  @nest .c-navigation.is-expanded & {
    opacity: 1;
    transform: translateX(-50vw) translateX(50%) translateX(var(--spacer-small));
    transition: transform calc(var(--expand-transitionDuration) / 2) ease-in;
  }
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(0.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.c-navigation-toggle-logo {
  pointer-events: all;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: filter 0s linear var(--transitionDuration);
  filter:
    drop-shadow( var(--shadow1--hover) )
    drop-shadow( var(--shadow2--hover) );

  @nest .c-navigation.is-expanded & {
    transition: none;
    filter: none;
  }
}

.c-navigation-toggle-bg {
  height: 280vmax;
  width: 280vmax;
  flex-shrink: 0;
  will-change: transform;
  transform: scale(0.02);
  opacity: 0;
  transition: opacity var(--transition), transform 0s linear var(--transitionDuration);

  @nest .c-navigation.is-expanded & {
    opacity: 1;
    transition: transform calc(var(--expand-transitionDuration) / 2) var(--transitionFunction) calc(var(--expand-transitionDuration) / 2);
    transform: translateY(var(--spacer-small)) scale(1);
  }
}
</style>
