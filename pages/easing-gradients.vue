<template>
  <div
    class="p-easingGradients theme-secondary"
  >
    <section
      class="u-lineLength u-container u-section"
    >
      <h1>{{ title }}</h1>
      <p>
        Linear gradients often have hard edges where they start and/or end. We can avoid those by controlling the color mix with easing functions.
      </p>
      <p>
        It's currently a <a href="https://github.com/w3c/csswg-drafts/issues/1332">CSSWG proposal</a> and you can use the
      </p>
      <ul class="u-grid p-easingGradients-cta">
        <li>
          <a
            class="u-button u-button-small"
            href="#editor"
          >
            Editor
          </a>
        </li>
        <li>
          <a
            class="u-button u-button-small"
            href="https://github.com/larsenwork/postcss-easing-gradients"
          >
            PostCSS plugin
          </a>
        </li>
        <li>
          <a
            class="u-button u-button-small"
            href="https://github.com/larsenwork/sketch-easing-gradient#readme"
          >
            Sketch plugin
          </a>
        </li>
      </ul>
      <h2>
        Examples
      </h2>
      <gradient-examples/>
      <div id="editor"><!--For link--></div>
      <h2>
        Editor
      </h2>
      <p>
        Create and preview your own easing gradients in CSS. Note that the CSSWG syntax isn't supported in any browsers yet.
      </p>
      <gradient-editor/>
      <thank-you
        tweet-text="Awesome easing gradient demo and editor"
        tweet-hashtags="easinggradients,cssfuture"
        repo="postcss-easing-gradients"
        slug="easing-gradients"
      />
      <h2>
        Explained
      </h2>
      <p>
        I wrote about it in detail on <a href="https://css-tricks.com/easing-linear-gradients/">CSS-Tricks</a> and would love to do a conference talk 😉 or two about it.
      </p>
      <p>
        Fortunately <a href="https://twitter.com/chriscoyier/status/861559397419560960">Chris Coyier</a> and others liked the idea and <a href="https://twitter.com/meyerweb/status/861614513371664384">Eric Meyer</a> made a <a href="https://github.com/w3c/csswg-drafts/issues/1332">CSSWG proposal</a> where the syntax was refined and you can chime in with your ideas/suggestions.
      </p>
      <p>
        Until that happens 🤞 you can use the <a href="https://github.com/larsenwork/postcss-easing-gradients">postCSS-easing-gradients</a> plugin which is more powerful than the editor above.
      </p>
      <p>
        What the plugin and the editor do is add a bunch of intermediate color-stops to create a "low poly" version of the easing function. The end result is ok for now and a lot prettier in relevant use cases.
      </p>
      <h2>
        Resources
      </h2>
      <ul>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function">MDN: Timing functions</a> &mdash; cubic bezier and steps explained.
        </li>
        <li>
          <a href="https://github.com/gka/chroma.js/">Chroma.js</a> &mdash; a fantastic color lib that I use to mix the colors.
        </li>
        <li>
          <a href="https://unsplash.com/photos/FV_PxCqgtwc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Plant</a> &mdash; photo by Igor Son on Unsplash.
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
import gradientEditor from '~/components/tools/gradient/editor'
import gradientExamples from '~/components/tools/gradient/examples'
import thankYou from '~/components/thank-you'

export default {
  components: {
    gradientEditor,
    gradientExamples,
    thankYou,
  },
  data() {
    return {
      title: 'Easing Gradients',
      description:
        'Supercharge your gradients with non-linear color mix and custom color spaces.',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://res.cloudinary.com/larsenwork/image/upload/easing-gradient_dnhqb0.jpg',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
      ],
      bodyAttrs: {
        class: 'theme-secondary',
      },
    }
  },
  transition() {
    return {
      mode: '',
    }
  },
}
</script>

<style lang="postcss">
.p-easingGradients-cta {
  grid-template-columns: repeat(2, 1fr);
  margin-top: var(--lineHeight-margin-small);

  @media (--medium) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
