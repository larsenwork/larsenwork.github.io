<template>
  <div
      class="c-gradientEditor"
      :class="{
        'is-active': $store.state.gradient.editorActive !== ''
      }"
      :style="{
        '--gradient': gradientCalc,
        '--gradient--linear': `linear-gradient(${gradientDirection }, ${ gradientColor1 }, ${ gradientColor2 })`
      }"
      >
    <div
        class="c-gradientEditor-toggles u-grid"
        >
      <button
          @click="toggleEditor('direction')"
          @keydown.tab="tabAway($event, 'direction')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'direction'
          }"
          >
        <div
            class="c-gradientEditor-toggle"
            >
          <direction-preview></direction-preview>
        </div>
      </button>
      <button
          @click="toggleEditor('color1')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'color1'
          }"
          >
          <div
              class="c-gradientEditor-toggle c-gradientEditor-toggle--color"
              :style="{
                '--hsla': gradientColor1
              }"
              >
          </div>
      </button>
      <button
          @click="toggleEditor('ease')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'ease'
          }"
          >
        <div
            class="c-gradientEditor-toggle"
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
          >
          <div
              class="c-gradientEditor-toggle c-gradientEditor-toggle--color"
              :style="{
                '--hsla': gradientColor2
              }"
              >
          </div>
      </button>
    </div>
    <div class="u-position-relative">
      <transition
          name="tr-fade"
          >
        <div
            class="c-gradientEditor-editors u-grid"
            v-if="$store.state.gradient.editorActive !== ''"
            >
          <div
              class="c-gradientEditor-editors-item"
              >
            <transition
                name="tr-fade"
                >
              <div
                  class="c-gradientEditor-editor u-position-cover"
                  v-if="$store.state.gradient.editorActive === 'direction'"
                  key="direction"
                  >
                <div
                    class="c-gradientEditor-editor-svg"
                    >
                  <direction-preview></direction-preview>
                  <direction-edit></direction-edit>
                </div>
              </div>
              <div
                  v-if="$store.state.gradient.editorActive === 'color1'"
                  class="c-gradientEditor-editor u-position-cover"
                  key="color1"
                  >
                <color-edit
                    color="color1"
                    >
                </color-edit>
              </div>
              <div
                  class="c-gradientEditor-editor u-position-cover"
                  v-if="$store.state.gradient.editorActive === 'ease'"
                  key="ease"
                  >
                <div
                    class="c-gradientEditor-editor-svg"
                    >
                  <easing-preview></easing-preview>
                  <easing-edit></easing-edit>
                </div>
              </div>
              <div
                  v-if="$store.state.gradient.editorActive === 'color2'"
                  class="c-gradientEditor-editor u-position-cover"
                  key="color2"
                  >
                <color-edit
                    color="color2"
                    >
                </color-edit>
              </div>
            </transition>
          </div>
          <div
              class="c-gradientEditor-editors-item"
              >
            <div class="c-gradientEditor-gradient u-position-cover"></div>
            <div class="c-gradientEditor-gradient c-gradientEditor-gradient--linear u-position-cover"></div>
          </div>
        </div>
      </transition>
    </div>
    <div class="c-gradientEditor-output u-position-relative">
      <div class="c-gradientEditor-gradient u-position-cover"></div>
      <div class="c-gradientEditor-gradient c-gradientEditor-gradient--linear u-position-cover"></div>
    </div>
    <code>
      <h3 class="t-codeLabel">CSS</h3>
      <pre>{{ gradientCalc }}</pre>
    </code>
    <code>
      <h3 class="t-codeLabel">CSSWG Proposal</h3>
      <pre>linear-gradient(
  {{ gradientDirection }},
  {{ gradientColor1 }},
  {{ gradientEase }},
  {{ gradientColor2 }}
);</pre></code>
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
@import '../../../assets/css/_media.css';

.c-gradientEditor-toggles {
  margin: var(--lineHeight-margin-small) auto;
  grid-template-columns: repeat(4, 1fr);
  max-width: var(--preview-maxSize);
  position: relative;
  z-index: var(--zIndex-modal);
}

.c-gradientEditor-toggle {
  position: relative;
  padding-bottom: 100%;

  &.c-gradientEditor-toggle--color {
    border-radius: var(--spacer-xsmall);
    background-image:
      linear-gradient(
        var(--hsla),
        var(--hsla)
      ),
      linear-gradient(45deg, var(--color-themed-bg-dimmed-more) 25%, transparent 25%, transparent 75%, var(--color-themed-bg-dimmed-more) 75%, var(--color-themed-bg-dimmed-more)),
      linear-gradient(45deg, var(--color-themed-bg-dimmed-more) 25%, transparent 25%, transparent 75%, var(--color-themed-bg-dimmed-more) 75%, var(--color-themed-bg-dimmed-more));
    background-size: 1rem 1rem;
    background-position: 0 0, 0 0, .5rem .5rem;
  }
}

.c-gradientEditor-editors {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding-left: var(--spacer-small);
  z-index: var(--zIndex-modal);
  grid-template-columns: 2fr 1fr;
  background-color: var(--color-themed-bg);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: var(--spacer-medium);
    background: linear-gradient(to bottom, hsl(0, 0%, 100%), hsla(0, 0%, 100%, 0));
    z-index: -1;
  }

  @media (--medium) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--large) {
    padding-right: 0;
    padding-left: 0;
  }
}

.c-gradientEditor-editors-item {
  position: relative;

  &::before {
    width: 100%;
    padding-top: 100%;
    content: '';
    display: flex;
  }
}


.c-gradientEditor-editor {

}

.c-gradientEditor-gradient {
  background: var(--gradient);
  border-radius: var(--spacer-xsmall);
  overflow: hidden;

  &.c-gradientEditor-gradient--linear {
    background: var(--gradient--linear), linear-gradient(var(--color-themed-bg), var(--color-themed-bg));
    opacity: 0;
    will-change: opacity;
    transition: var(--transition);

    &:hover {
      opacity: 1;
    }
  }
}

.c-gradientEditor-editor-svg {
  position: absolute;
  top: var(--stroke-medium);
  right: var(--stroke-medium);
  bottom: var(--stroke-medium);
  left: var(--stroke-medium);
}

.c-gradientEditor-output {
  margin-bottom: var(--lineHeight-margin-small);
  height: var(--editor-size);
}
</style>
