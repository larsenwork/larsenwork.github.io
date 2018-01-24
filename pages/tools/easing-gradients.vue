<template>
  <div
      class="p-easingGradients theme-secondary"
      >
    <section
        class="u-lineLength u-container u-section"
        >
      <h1>
        Easing Gradients
      </h1>
      <p>Gradients often have hard edges where they start and/or end. We can avoid those (and do other fun stuff) by controlling the color mix with easing functions.</p>
      <h2>Examples</h2>
      <gradient-examples></gradient-examples>
      <h2>Editor</h2>
      <p>Easily create and preview your own easing gradients. Note that the CSSWG proposal syntax isn't supported in any browsers yet.</p>
      <gradient-editor></gradient-editor>
      <h2>Explained</h2>
      <p>I wrote about it in detail on <a href="https://css-tricks.com/easing-linear-gradients/">CSS-Tricks</a>. Basically we introduce easing functions between linear-gradient() color stops to dictate a non-linear mix of colors.</p>
      <p>Fortunately other people liked my idea and <a href="https://twitter.com/meyerweb/status/861614513371664384">Eric Meyer</a> made a <a href="https://github.com/w3c/csswg-drafts/issues/1332">CSSWG proposal</a> where you can chime in with your ideas/suggestions.</p>
      <p>Until that happens 🤞 you can use the <a href="https://github.com/larsenwork/postcss-easing-gradients">postCSS-easing-gradients</a> plugin which is more powerfull than the editor above.</p>
      <p>What the plugin and the editor does is adding a bunch of intermediate color-stops to create a "low poly" version of the easing function. The end result is ok and a lot prettier than plain linear gradients in relevant use cases.</p>
      <p>The plugin supports all easing functions and color formats. I'm currently working on it to support as much of the proposed syntax as possible.</p>
      <h2>References</h2>
    </section>
  </div>
</template>


<script>
import gradientEditor from '~/components/tools/gradient/editor'
import gradientExamples from '~/components/tools/gradient/examples'

export default {
  transition () {
    return {
      mode: ''
    }
  },
  head: {
    bodyAttrs: {
      class: 'theme-secondary'
    }
  },
  components: {
    gradientEditor,
    gradientExamples
  }
}
</script>


<style lang="postcss">
.p-easingGradients {
  --preview-maxSize: calc(var(--lineHeight-body) * 14);
  --editor-size: calc(var(--preview-maxSize) / 2);
}
</style>
