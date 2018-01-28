<template>
  <div
      class="p-easingGradients theme-secondary"
      >
    <section
        class="u-lineLength u-container u-section"
        >
      <h1>Easing Gradients</h1>
      <p>Linear gradients often have hard edges where they start and/or end. We can avoid those by controlling the color mix with easing functions.</p>
      <p>It's currently a <a href="https://github.com/w3c/csswg-drafts/issues/1332">CSSWG proposal</a> but you can use the <a href="#editor">editor</a> below and/or <a href="https://github.com/larsenwork/postcss-easing-gradients">postCSS-easing-gradients</a>. I'm creating a <a href="https://github.com/larsenwork/sketch-easing-gradient">Sketch plugin</a> too.</p>
      <h2>Examples</h2>
      <gradient-examples></gradient-examples>
      <div id="editor"></div>
      <h2>Editor</h2>
      <p>Create and preview your own easing gradients in CSS. Note that the CSSWG syntax isn't supported in any browsers yet.</p>
      <gradient-editor></gradient-editor>
      <h2>Explained</h2>
      <p>I wrote about it in detail on <a href="https://css-tricks.com/easing-linear-gradients/">CSS-Tricks</a>.</p>
      <p>Fortunately other people liked my idea and <a href="https://twitter.com/meyerweb/status/861614513371664384">Eric Meyer</a> made a <a href="https://github.com/w3c/csswg-drafts/issues/1332">CSSWG proposal</a> where the syntax was refined and you can chime in with your ideas/suggestions.</p>
      <p>Until that happens 🤞 you can use the <a href="https://github.com/larsenwork/postcss-easing-gradients">postCSS-easing-gradients</a> plugin which is more powerfull than the editor above.</p>
      <p>What the plugin and the editor does is adding a bunch of intermediate color-stops to create a "low poly" version of the easing function. The end result is ok for now and a lot prettier in relevant use cases.</p>
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
