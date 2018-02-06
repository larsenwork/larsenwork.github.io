<template>
  <div
      class="c-gradientEditor"
      :class="{
        'is-active': $store.state.gradient.editorActive !== ''
      }"
      :style="{
        '--gradient': gradient,
        '--gradient--linear': `linear-gradient(${ gradientDirection }, ${ gradientColor1 }, ${ gradientColor2 })`
      }"
      >
    <div
        class="c-gradientEditor-settings u-grid u-marginTop"
        >
      <div>
        <div class="c-gradientEditor-label">
          Easing function
        </div>
        <select
            v-model="$store.state.gradient.settings.easingFunction"
            >
          <option>cubic-bezier</option>
          <option>steps</option>
        </select>
      </div>
      <div>
        <div class="c-gradientEditor-label">
          Color space
        </div>
        <select
            v-model="$store.state.gradient.settings.colorMode"
            >
          <option>rgb</option>
          <option>hsl</option>
          <option>lab</option>
          <option>lch</option>
          <option>lrgb</option>
        </select>
      </div>
    </div>
    <p class="c-gradientEditor-label u-marginTop">Easing linear gradient</p>
    <div
        class="c-gradientEditor-toggles u-grid u-marginBottom"
        >
      <button
          @click="toggleEditor('direction')"
          @keydown.tab="tabAway($event, 'direction')"
          :class="{
            'is-active': $store.state.gradient.editorActive === 'direction'
          }"
          >
        <div
            class="u-aspect--1-1"
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
              class="c-gradientEditor-toggles-color u-aspect--1-1"
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
            class="u-aspect--1-1"
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
              class="c-gradientEditor-toggles-color u-aspect--1-1"
              :style="{
                '--hsla': gradientColor2
              }"
              >
          </div>
      </button>
    </div>
    <div class="u-position-relative">
      <div class="c-gradientEditor-output u-position-cover">
        <div class="c-gradientEditor-output-gradient u-position-relative">
          <div class="c-gradientEditor-gradient u-position-cover"></div>
          <div class="c-gradientEditor-gradient c-gradientEditor-gradient--linear u-position-cover"></div>
        </div>
      </div>
      <div class="c-gradientEditor-editors c-gradientEditor-editors--dummy u-grid">
        <div
            class="u-aspect--1-1"
            >
        </div>
      </div>
      <transition
          name="tr-fade"
          >
        <div
            class="c-gradientEditor-editors u-grid u-position-cover"
            v-if="$store.state.gradient.editorActive !== ''"
            >
          <div
              class="u-aspect--1-1"
              >
            <transition
                name="tr-fade"
                >
              <div
                  class="u-position-cover"
                  v-if="$store.state.gradient.editorActive === 'direction' && !$store.state.gradient.settingsVisible"
                  key="direction"
                  >
                <div
                    class="c-gradientEditor-svg"
                    >
                  <direction-preview></direction-preview>
                  <direction-edit></direction-edit>
                </div>
              </div>
              <div
                  v-if="$store.state.gradient.editorActive === 'color1' && !$store.state.gradient.settingsVisible"
                  class="u-position-cover"
                  key="color1"
                  >
                <color-edit
                    color="color1"
                    >
                </color-edit>
              </div>
              <div
                  v-if="$store.state.gradient.editorActive === 'ease' && !$store.state.gradient.settingsVisible"
                  class="u-position-cover"
                  key="ease"
                  >
                <transition
                    name="tr-fade"
                    >
                  <div
                      class="c-gradientEditor-svg"
                      v-if="$store.state.gradient.settings.easingFunction === 'cubic-bezier'"
                      key="cubic"
                      >
                    <easing-preview></easing-preview>
                    <easing-edit></easing-edit>
                  </div>
                  <div
                      v-if="$store.state.gradient.settings.easingFunction === 'steps'"
                      key="steps"
                      >
                    <label
                        for="c-gradientEditor-input-steps-number"
                        class="c-gradientEditor-label"
                        >
                      Steps number
                    </label>
                    <input
                        id="c-gradientEditor-input-steps-number"
                        class="u-marginBottom"
                        v-model="$store.state.gradient.steps.number"
                        type="number"
                        min="2"
                        max="1000"
                        >
                    <label
                        for="c-gradientEditor-input-steps-number"
                        class="c-gradientEditor-label"
                        >
                      Steps skip
                    </label>
                    <select
                        id="c-gradientEditor-input-steps-number"
                        v-model="$store.state.gradient.steps.skip"
                        >
                      <option>skip-none</option>
                      <option>skip-both</option>
                      <option>skip-start</option>
                      <option>skip-end</option>
                    </select>
                  </div>
                </transition>
              </div>
              <div
                  v-if="$store.state.gradient.editorActive === 'color2' && !$store.state.gradient.settingsVisible"
                  class="u-position-cover"
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
              v-if="$store.state.gradient.editorActive !== ''"
              class="u-position-relative"
              >
            <div class="c-gradientEditor-gradient u-position-cover"></div>
            <div class="c-gradientEditor-gradient c-gradientEditor-gradient--linear u-position-cover"></div>
          </div>
        </div>
      </transition>
    </div>
    <code>
      <h3 class="t-codeLabel">CSS</h3>
      <pre>{{ gradient }};</pre>
    </code>
    <code>
      <h3 class="t-codeLabel">CSSWG Proposal</h3>
      <pre>linear-gradient(
  {{ gradientDirection }},
  {{ gradientColor1 }},
  {{ gradientFunction }},
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
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'
import icon from '~/components/icon'

export default {
  components: {
    colorEdit,
    easingEdit,
    easingPreview,
    directionEdit,
    directionPreview,
    icon
  },
  mixins: [gradientOutput],
  computed: {
    gradient: function () {
      return this.gradientCalc(this.$store.state.gradient.settings.colorMode)
    }
  },
  methods: {
    toggleEditor (editor) {
      this.$store.state.gradient.editorActive === editor
        ? this.$store.commit('hideGradientEditor')
        : this.$store.commit('showGradientEditor', editor)
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
  grid-template-columns: repeat(4, 1fr);
}

.c-gradientEditor-toggles-color {
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

.c-gradientEditor-settings {
  grid-template-columns: repeat(2, 1fr);
}

.c-gradientEditor-label {
  display: block;
  margin-bottom: var(--lineHeight-margin-xsmall);
  color: var(--color-themed-fg-50);
}

.c-gradientEditor-editors {
  grid-template-columns: 2fr 1fr;
  background-color: var(--color-themed-bg);
  z-index: var(--zIndex-editor);
  padding-left: var(--spacer-medium);

  @media (--medium) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 650px) {
    padding-left: 0;
  }

  &.c-gradientEditor-editors--dummy {
    visibility: hidden;
    opacity: 0;
  }
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

.c-gradientEditor-svg {
  position: absolute;
  top: var(--stroke-medium);
  right: var(--stroke-medium);
  bottom: var(--stroke-medium);
  left: var(--stroke-medium);
}

.c-gradientEditor-output {
  display: flex;
  flex-direction: column;
}

.c-gradientEditor-output-gradient {
  flex-grow: 1;
}
</style>
