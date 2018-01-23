<template>
  <div
      class="c-easingEditor"
      >
    <div
        class="c-easingEditor-toggles"
        :class="{
          'is-active': $store.state.gradient.editorActive !== ''
        }"
        role="tablist"
        >
      <button
          @click="toggleEditor('direction')"
          @keydown.tab="tabAway($event, 'direction')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'direction'
          }"
          role="tab"
          >
        <div
            class="c-easingEditor-toggle"
            >
          <direction-preview></direction-preview>
        </div>
      </button>
      <button
          @click="toggleEditor('color1')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'color1'
          }"
          role="tab"
          >
          <div
              class="c-easingEditor-toggle c-easingEditor-toggle--color"
              :style="{
                '--hue': $store.state.gradient.color1.h,
                '--saturation': $store.state.gradient.color1.s,
                '--lightness': $store.state.gradient.color1.l,
                '--alpha': $store.state.gradient.color1.a
              }"
              >
          </div>
      </button>
      <button
          @click="toggleEditor('ease')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'ease'
          }"
          role="tab"
          >
        <div
            class="c-easingEditor-toggle"
            >
          <easing-preview></easing-preview>
        </div>
      </button>
      <button
          @click="toggleEditor('color2')"
          @keydown.tab="tabAway($event, 'color2')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'color2'
          }"
          role="tab"
          >
          <div
              class="c-easingEditor-toggle c-easingEditor-toggle--color"
              :style="{
                '--hue': $store.state.gradient.color2.h,
                '--saturation': $store.state.gradient.color2.s,
                '--lightness': $store.state.gradient.color2.l,
                '--alpha': $store.state.gradient.color2.a
              }"
              >
          </div>
      </button>
    </div>
    <transition
        name="tr-dropdown"
        >
      <div
          class="c-easingEditor-editors"
          v-if="$store.state.gradient.editorActive !== ''"
          >
        <transition
            name="tr-fade"
            >
          <div
              class="c-easingEditor-editor"
              v-if="$store.state.gradient.editorActive === 'direction'"
              key="direction"
              >
            <div
                class="c-easingEditor-editor-svg"
                >
              <direction-preview></direction-preview>
              <direction-edit></direction-edit>
            </div>
          </div>
          <div
              v-if="$store.state.gradient.editorActive === 'color1'"
              class="c-easingEditor-editor"
              key="color1"
              >
            <color-edit
                color="color1"
                >
            </color-edit>
          </div>
          <div
              class="c-easingEditor-editor"
              v-if="$store.state.gradient.editorActive === 'ease'"
              key="ease"
              >
            <div
                class="c-easingEditor-editor-svg"
                >
              <easing-preview></easing-preview>
              <easing-edit></easing-edit>
            </div>
          </div>
          <div
              v-if="$store.state.gradient.editorActive === 'color2'"
              class="c-easingEditor-editor"
              key="color2"
              >
            <color-edit
                color="color2"
                >
            </color-edit>
          </div>
        </transition>
      </div>
    </transition>
    <div class="c-easingEditor-output">
    </div>
    <code>
      <h3 class="t-codeLabel">CSSWG Proposal</h3>
      <pre>linear-gradient(
  {{ gradientDirection }},
  {{ gradientColor1 }},
  {{ gradientEase }},
  {{ gradientColor2 }}
);</pre></code>
    <code>
      <h3 class="t-codeLabel">CSS</h3>
      <pre>linear-gradient();</pre>
    </code>
  </div>
</template>

<script>
import colorEdit from '~/components/tools/gradient/color-edit'
import easingEdit from '~/components/tools/gradient/easing-edit'
import easingPreview from '~/components/tools/gradient/easing-preview'
import directionEdit from '~/components/tools/gradient/direction-edit'
import directionPreview from '~/components/tools/gradient/direction-preview'
import gradientOutput from '~/components/mixins/gradient-output'

export default {
  components: {
    colorEdit,
    easingEdit,
    easingPreview,
    directionEdit,
    directionPreview
  },
  mixins: [gradientOutput],
  methods: {
    toggleEditor (editor) {
      if (this.$store.state.gradient.editorActive === editor) {
        this.$store.commit('hideGradientEditor')
        this.$store.commit('hideOverlay')
      } else {
        this.$store.commit('showGradientEditor', editor)
        this.$store.commit('showOverlay')
      }
    },
    tabAway (event, editor) {
      if ((event.shiftKey && editor === 'direction') || (!event.shiftKey && editor === 'color2')) {
        this.toggleEditor(editor)
      }
    }
  }
}
</script>

<style lang="postcss">
.c-easingEditor-toggles {
  display: grid;
  grid-gap: var(--spacer-small);
  margin: var(--lineHeight-margin-small) auto;
  grid-template-columns: repeat(4, 1fr);
  max-width: var(--preview-maxSize);
  position: relative;
  z-index: var(--zIndex-modal);
}

.c-easingEditor-toggle {
  position: relative;
  padding-bottom: 100%;

  &.c-easingEditor-toggle--color {
    border-radius: var(--spacer-xsmall);
    background-image:
      linear-gradient(
        hsla(
          var(--hue),
          calc(var(--saturation) * 1%),
          calc(var(--lightness) * 1%),
          var(--alpha)
        ),
        hsla(
          var(--hue),
          calc(var(--saturation) * 1%),
          calc(var(--lightness) * 1%),
          var(--alpha)
        )
      ),
      linear-gradient(45deg, var(--color-themed-bg-dimmed) 25%, transparent 25%),
      linear-gradient(-45deg, var(--color-themed-bg-dimmed) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--color-themed-bg-dimmed) 75%),
      linear-gradient(-45deg, transparent 75%, var(--color-themed-bg-dimmed) 75%);
    background-size: 100%, 16px, 16px, 16px, 16px;
    background-position: 0 0, 0 0, 0 8px, 8px -8px, -8px 0px;
  }
}

.c-easingEditor-editors {
  position: relative;
  z-index: var(--zIndex-modal);
}

.c-easingEditor-editor {
  position: absolute;
  top: 0;
  left: calc(50% - 50vw);
  right: calc(50% - 50vw);
  width: var(--editor-size);
  height: var(--editor-size);
  margin-right: auto;
  margin-left: auto;
  padding: var(--spacer-small);
}

.c-easingEditor-editor-svg {
  position: relative;
  height: 100%;
}

.c-easingEditor-output {
  margin-bottom: var(--lineHeight-margin-small);
  height: calc(var(--editor-size) * 3);
  border-radius: var(--spacer-xsmall);
  background-image: linear-gradient(
    to bottom,
    #000,
    cubic-bezier(0.42, 0, 0.58, 1),
    hsla(0, 0%, 0%, 0)
  );
}
</style>
