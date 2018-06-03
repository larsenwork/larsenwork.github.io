<template>
  <div
    :style="{
      '--gradient': gradient,
      '--gradient--linear': `linear-gradient(${ gradientDirection }, ${ gradientColor1 }, ${ gradientColor2 })`
    }"
    :class="{
      'is-active': isEditorActive
    }"
    class="c-gradientEditor"
  >
    <div
      class="c-gradientEditor-settings u-grid u-marginTop"
    >
      <div>
        <label
          class="c-gradientEditor-label"
          for="selectTiming"
        >
          Easing function
        </label>
        <div
          class="u-position-relative"
        >
          <select-chevron />
          <select
            id="selectTiming"
            v-model="$store.state.gradient.settings.easingFunction"
          >
            <option>cubic-bezier</option>
            <option>steps</option>
          </select>
        </div>
      </div>
      <div>
        <label
          class="c-gradientEditor-label"
          for="selectColorSpace"
        >
          Color space
        </label>
        <div
          class="u-position-relative"
        >
          <select-chevron />
          <select
            id="selectColorSpace"
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
    </div>
    <p
      class="c-gradientEditor-label u-marginTop"
    >
      Easing linear gradient
    </p>
    <div
      class="c-gradientEditor-toggles u-grid u-marginBottom"
    >
      <button
        :class="{
          'is-active': $store.state.gradient.editorActive === 'direction'
        }"
        aria-label="Gradient direction"
        @click="toggleEditor('direction')"
        @keydown.tab="tabAway($event, 'direction')"
      >
        <div
          class="u-aspect--1-1"
        >
          <direction-preview/>
        </div>
      </button>
      <button
        :class="{
          'is-active': $store.state.gradient.editorActive === 'color1'
        }"
        aria-label="Gradient start color"
        @click="toggleEditor('color1')"
      >
        <div
          :style="{
            '--hsla': gradientColor1
          }"
          class="c-gradientEditor-toggles-color u-aspect--1-1"
        />
      </button>
      <button
        :class="{
          'is-active': $store.state.gradient.editorActive === 'ease'
        }"
        aria-label="Gradient timing function"
        @click="toggleEditor('ease')"
      >
        <div
          class="u-aspect--1-1"
        >
          <easing-preview/>
        </div>
      </button>
      <button
        :class="{
          'is-active': $store.state.gradient.editorActive === 'color2'
        }"
        aria-label="Gradient stop color"
        @click="toggleEditor('color2')"
        @keydown.tab="tabAway($event, 'color2')"
      >
        <div
          :style="{
            '--hsla': gradientColor2
          }"
          class="c-gradientEditor-toggles-color u-aspect--1-1"
        />
      </button>
    </div>
    <div
      class="u-position-relative"
    >
      <div
        :class="{
          'is-slim': $store.state.gradient.editorActive !== ''
        }"
        class="c-gradientEditor-output"
      >
        <div
          class="c-gradientEditor-gradient u-position-cover"
        />
        <div
          class="c-gradientEditor-gradient c-gradientEditor-gradient--linear u-position-cover"
        >
          <div
            class="c-gradientEditor-gradient-tooltip"
          >
            Plain gradient
          </div>
        </div>
      </div>
      <div
        class="c-gradientEditor-editors c-gradientEditor-editors--dummy u-grid"
      >
        <div
          class="u-aspect--1-1"
        />
      </div>
      <transition
        name="tr-fade"
      >
        <div
          v-if="$store.state.gradient.editorActive !== ''"
          class="c-gradientEditor-editors u-grid u-position-cover"
        >
          <div
            class="u-aspect--1-1"
          >
            <transition
              name="tr-fade"
            >
              <div
                v-if="$store.state.gradient.editorActive === 'direction' && !$store.state.gradient.settingsVisible"
                key="direction"
                class="u-position-cover"
              >
                <div
                  class="c-gradientEditor-svg"
                >
                  <direction-preview/>
                  <direction-edit/>
                </div>
              </div>
              <div
                v-if="$store.state.gradient.editorActive === 'color1' && !$store.state.gradient.settingsVisible"
                key="color1"
                class="u-position-cover"
              >
                <color-edit
                  color="color1"
                />
              </div>
              <div
                v-if="$store.state.gradient.editorActive === 'ease' && !$store.state.gradient.settingsVisible"
                key="ease"
                class="u-position-cover"
              >
                <transition
                  name="tr-fade"
                >
                  <div
                    v-if="$store.state.gradient.settings.easingFunction === 'cubic-bezier'"
                    key="cubic"
                    class="c-gradientEditor-svg"
                  >
                    <easing-preview/>
                    <easing-edit/>
                  </div>
                  <div
                    v-if="$store.state.gradient.settings.easingFunction === 'steps'"
                    key="steps"
                  >
                    <label
                      for="c-gradientEditor-input-steps-number"
                      class="c-gradientEditor-label"
                    >
                      Steps number (2-100)
                    </label>
                    <input
                      id="c-gradientEditor-input-steps-number"
                      v-model="$store.state.gradient.steps.number"
                      class="u-marginBottom"
                      type="number"
                      min="2"
                      max="100"
                      @keypress="isNumber($event)"
                    >
                    <label
                      for="c-gradientEditor-input-steps-skip"
                      class="c-gradientEditor-label"
                    >
                      Steps skip
                    </label>
                    <div
                      class="u-position-relative"
                    >
                      <select-chevron />
                      <select
                        id="c-gradientEditor-input-steps-skip"
                        v-model="$store.state.gradient.steps.skip"
                      >
                        <option>skip-none</option>
                        <option>skip-both</option>
                        <option>skip-start</option>
                        <option>skip-end</option>
                      </select>
                    </div>
                  </div>
                </transition>
              </div>
              <div
                v-if="$store.state.gradient.editorActive === 'color2' && !$store.state.gradient.settingsVisible"
                key="color2"
                class="u-position-cover"
              >
                <color-edit
                  color="color2"
                />
              </div>
            </transition>
          </div>
          <div
            class="u-position-relative"
          >
            <div
              :class="{
                'is-active': $store.state.gradient.editorActive !== ''
              }"
              class="c-gradientEditor-gradient-wrap"
            >
              <div
                class="c-gradientEditor-gradient u-position-cover"
              />
              <div
                class="c-gradientEditor-gradient c-gradientEditor-gradient--linear u-position-cover"
              >
                <div
                  class="c-gradientEditor-gradient-tooltip"
                >
                  Plain gradient
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <prism language="css" label="CSSWG Proposal">{{ futureCSS }}</prism>
    <prism language="css" label="CSS">{{ oldCSS }}</prism>
  </div>
</template>

<script>
import selectChevron from '~/components/select-chevron'
import prism from '~/components/prism'
import colorEdit from '~/components/tools/gradient/color-edit'
import easingEdit from '~/components/tools/gradient/easing-edit'
import easingPreview from '~/components/tools/gradient/easing-preview'
import directionEdit from '~/components/tools/gradient/direction-edit'
import directionPreview from '~/components/tools/gradient/direction-preview'
import gradientOutput from '~/components/tools/gradient/calculations/gradient-output'

export default {
  components: {
    colorEdit,
    easingEdit,
    easingPreview,
    directionEdit,
    directionPreview,
    selectChevron,
    prism,
  },
  mixins: [gradientOutput],
  computed: {
    isEditorActive: function() {
      return !!this.$store.state.gradient.editorActive
    },
    gradient: function() {
      return this.gradientCalc(this.$store.state.gradient.settings.colorMode)
    },
    prettyGradient: function() {
      return `linear-gradient(
  ${this.gradientDirection},
  ${this.gradientColor1},
  ${this.gradientFunction},
  ${this.gradientColor2}
);`
    },
    oldCSS: function() {
      return `.forNow {
  ${this.gradientCalc(this.$store.state.gradient.settings.colorMode, true)}
};`
    },
    futureCSS: function() {
      return `#future {
  linear-gradient(
    ${this.gradientDirection},
    ${this.gradientColor1},
    ${this.gradientFunction},
    ${this.gradientColor2}
  );
};`
    },
  },
  methods: {
    toggleEditor(editor) {
      this.$store.state.gradient.editorActive === editor
        ? this.$store.commit('hideGradientEditor')
        : this.$store.commit('showGradientEditor', editor)
    },
    tabAway(event, editor) {
      if (
        (event.shiftKey && editor === 'direction') ||
        (!event.shiftKey && editor === 'color2')
      ) {
        this.toggleEditor(editor)
      }
    },
    isNumber(event) {
      if (event.keyCode > 31 && (event.keyCode < 48 || event.keyCode > 57)) {
        event.preventDefault()
      } else {
        return true
      }
    },
  },
}
</script>

<style lang="postcss">
@import '../../../assets/css/_media.css';

.c-gradientEditor-toggles {
  grid-template-columns: repeat(4, 1fr);
}

.c-gradientEditor-toggles-color {
  border-radius: var(--spacer-xsmall);
  background-image: linear-gradient(var(--hsla), var(--hsla)),
    linear-gradient(
      45deg,
      var(--color-themed-bg-dimmed-more) 25%,
      transparent 25%,
      transparent 75%,
      var(--color-themed-bg-dimmed-more) 75%,
      var(--color-themed-bg-dimmed-more)
    ),
    linear-gradient(
      45deg,
      var(--color-themed-bg-dimmed-more) 25%,
      transparent 25%,
      transparent 75%,
      var(--color-themed-bg-dimmed-more) 75%,
      var(--color-themed-bg-dimmed-more)
    );
  background-size: 1rem 1rem;
  background-position: 0 0, 0 0, 0.5rem 0.5rem;
}

.c-gradientEditor-settings {
  grid-template-columns: repeat(2, 1fr);
}

.c-gradientEditor-label {
  display: block;
  margin-bottom: var(--lineHeight-margin-xsmall);
  color: var(--color-themed-fg-72);
}

.c-gradientEditor-editors {
  grid-template-columns: minmax(10rem, 1fr) 1fr;
  background-color: var(--color-themed-bg);
  z-index: var(--zIndex-editor);
  padding-left: var(--spacer-medium);

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
  display: flex;
  align-items: center;
  justify-content: center;

  &.c-gradientEditor-gradient--linear {
    background: var(--gradient--linear),
      linear-gradient(var(--color-themed-bg), var(--color-themed-bg));
    opacity: 0;
    will-change: opacity;
    transition: var(--transition);

    &:hover {
      @media (--medium) {
        opacity: 1;
      }
    }
  }
}

.c-gradientEditor-gradient-tooltip {
  color: var(--color-themed-bg);
  background-color: var(--color-themed-fg-72);
  padding: var(--spacer-xsmall);
  border-radius: var(--spacer-xsmall);
}

.c-gradientEditor-svg {
  position: absolute;
  top: var(--stroke-medium);
  right: var(--stroke-medium);
  bottom: var(--stroke-medium);
  left: var(--stroke-medium);
}

.c-gradientEditor-output {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition-timing-function: var(--transitionFunction);
  transition-duration: calc(var(--transitionDuration) / 1);
  will-change: width;

  &.is-slim {
    width: calc(50% - (0.5 * var(--spacer-small)));
  }
}
</style>
