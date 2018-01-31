<template>
  <nav
      class="c-navigation"
      :class="$store.state.navigationVisible ? 'is-expanded' : ''">
    <div class="c-navigation-links u-lineLength u-grid">
      <div class="c-navigation-links-column">
        <h3 class="c-navigation-links-header">
          Me
        </h3>
      </div>
    </div>
    <div
        class="c-navigation-toggle">
      <svg
          class="c-navigation-toggle-bg"
          viewBox="0 0 86 86">
        <use xlink:href="#logo-bg" />
      </svg>
      <svg
          class="c-navigation-toggle-logo"
          @click="toggleNavigation"
          viewBox="0 0 86 86">
        <path
            id="logo-bg"
            d="M13.5 41.65C13.5 25.48 18.9 12 35.07 12 52.59 12 75.5 25.48 75.5 43S53.93 74 36.41 74C18.9 74 13.5 59.17 13.5 41.65z" />
        <path
            class="c-navigation-toggle-logo-a"
            d="M33.97 23.87c1.77 0 3.57 0 4.84 1.27.9.9 1.38 2.44.62 4.18h4.26l-1.75 4.55 5.12.02s-2.73 4.79-3.95 7.46c4.62 0 7.6 2.85 8.8 6.8.74 2.41 1.41 7 1.96 11.98H48.6c-.58-4.76-1.13-9.14-1.94-11.22-1-2.53-2.32-3.56-5.57-3.35-2.56 5.46-2.94 9.88-2.94 14.57h-5.27c0-9.8 2.04-14 7.1-23.8l-4.42-.02 2.01-5.34c-1.07.46-2.37.46-3.59.46.32-2.44.32-5.12 0-7.56z"
            fill="#FFF" />
      </svg>
    </div>
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
