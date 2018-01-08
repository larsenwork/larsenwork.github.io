<template>
  <nav
      class="c-menu"
      :class="$store.state.menuVisible ? 'is-expanded' : ''">
    <div class="c-menu-links u-lineLength">
      <div>
        <h2 class="c-menu-links-header">Me</h2>
        <nuxt-link
            class="c-menu-link"
            @click.native="$store.commit('hideMenu')"
            to="/">
          About
        </nuxt-link>
        <nuxt-link
            class="c-menu-link"
            @click.native="$store.commit('hideMenu')"
            to="/">
          Projects
        </nuxt-link>
      </div>
      <div>
        <h2 class="c-menu-links-header">Tools</h2>
        <nuxt-link
            class="c-menu-link"
            @click.native="$store.commit('hideMenu')"
            to="/tools/easing-gradients">
          Easing Gradients
        </nuxt-link>
        <nuxt-link
            class="c-menu-link"
            @click.native="$store.commit('hideMenu')"
            to="/tools/easing-gradients">
          Fluid Scale
        </nuxt-link>
      </div>
      <div>
        <h2 class="c-menu-links-header">Rambling</h2>
        <nuxt-link
            class="c-menu-link"
            @click.native="$store.commit('hideMenu')"
            to="/tools/easing-gradients">
          Blog
        </nuxt-link>
        <nuxt-link
            class="c-menu-link"
            @click.native="$store.commit('hideMenu')"
            to="/tools/easing-gradients">
          Talks
        </nuxt-link>
      </div>
      <div class="c-menu-links-social">
        <h2 class="c-menu-links-header">@larsenwork</h2>
        <app-social></app-social>
      </div>
    </div>
    <div
        class="c-menu-toggle"
        @click="$store.commit('showMenu')">
      <svg
          class="c-menu-toggle-bg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 86 86">
        <use xlink:href="#logo-bg"/>
      </svg>
      <svg
          class="c-menu-toggle-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 86 86">
        <path
            id="logo-bg"
            d="M13.5 41.65C13.5 25.48 18.9 12 35.07 12 52.59 12 75.5 25.48 75.5 43S53.93 74 36.41 74C18.9 74 13.5 59.17 13.5 41.65z"/>
        <path
            class="c-menu-toggle-logo-a"
            d="M33.97 23.87c1.77 0 3.57 0 4.84 1.27.9.9 1.38 2.44.62 4.18h4.26l-1.75 4.55 5.12.02s-2.73 4.79-3.95 7.46c4.62 0 7.6 2.85 8.8 6.8.74 2.41 1.41 7 1.96 11.98H48.6c-.58-4.76-1.13-9.14-1.94-11.22-1-2.53-2.32-3.56-5.57-3.35-2.56 5.46-2.94 9.88-2.94 14.57h-5.27c0-9.8 2.04-14 7.1-23.8l-4.42-.02 2.01-5.34c-1.07.46-2.37.46-3.59.46.32-2.44.32-5.12 0-7.56z"
            fill="#FFF"/>
      </svg>
    </div>
  </nav>
</template>

<script>
  import social from '~/components/social'
  export default {
    components: {
      'app-social': social
    }
  }
</script>


<style lang="postcss">
  @import '../assets/css/_media.css';

  :root {
    --expand-transitionDuration: 0.3s;
  }

  .c-menu {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: var(--zIndex-nav);
    display: flex;
    justify-content: center;
    color: var(--color-bright);
    padding-bottom: var(--lineHeight-margin-xsmall);
  }

  .c-menu-links {
    visibility: hidden;
    opacity: 0;
    will-change: opacity;
    margin: var(--spacer-small);
    width: 100%;
    display: grid;
    grid-gap: var(--spacer-small);
    grid-template-columns: 1fr 1fr;

    @media (--medium) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @nest .c-menu.is-expanded & {
      transition: 0.2s var(--transitionFunction) calc(var(--expand-transitionDuration) - 0.1s);
      visibility: visible;
      opacity: 1;
    }
  }

  .c-menu-links-header {
    margin-top: var(--lineHeight-margin-small);
    margin-bottom: var(--lineHeight-margin-xsmall);
    opacity: var(--opacity-mid);
  }

  .c-menu-links-social {
    @media (--medium) {
      grid-column: 1 / -1;
    }
  }

  .c-menu-link {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  .c-menu-toggle {
    position: absolute;
    right: var(--spacer-small);
    bottom: var(--spacer-small);
    width: var(--spacer-large);
    height: var(--spacer-large);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: -1;
    will-change: transform;
    fill: var(--color-brand);

    @nest .c-menu.is-expanded & {
      transform: translateX(-50vw) translateX(50%) translateX(var(--spacer-small));
      transition: calc(var(--expand-transitionDuration) - 0.15s) ease-in;
      cursor: unset;
    }
  }

  .c-menu-toggle-logo {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .c-menu-toggle-logo-a {
    @nest .c-menu.is-expanded & {
      display: none;
    }
  }

  .c-menu-toggle-bg {
    height: 180vmax;
    width: 180vmax;
    flex-shrink: 0;
    will-change: transform;
    transform: scale(0.02);

    @nest .c-menu.is-expanded & {
      transition: var(--expand-transitionDuration) var(--transitionFunction) 0.1s;
      transform: scale(1);
    }
  }
</style>
