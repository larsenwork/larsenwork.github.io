import * as shorthands from './gradient-shorthands'
import chroma from 'chroma-js'
import { stepsCoordinates, cubicCoordinates } from 'easing-coordinates'

const rounded = (number, precission = 0) => +number.toFixed(precission)

export default {
  computed: {
    gradientDirection() {
      return this.getStoreDirection()
    },
    gradientColor1() {
      return this.getStoreHsla1()
    },
    gradientColor2() {
      return this.getStoreHsla2()
    },
    gradientFunction() {
      if (
        this.$store.state.gradient.settings.easingFunction === 'cubic-bezier'
      ) {
        const cubic = `cubic-bezier(${this.getStoreBezierCoordinates().join(
          ', '
        )})`
        return shorthands.cubic[cubic] ? shorthands.cubic[cubic] : cubic
      } else {
        return `steps(${this.$store.state.gradient.steps.number}, ${
          this.$store.state.gradient.steps.skip
        })`
      }
    },
  },
  methods: {
    // lrgb as default value since it produces a result closes to most browser defaults
    gradientCalc(colorMode = 'lrgb', preview = false) {
      // Because number input in Safari is a bitch...
      let stepsNumber = Number(this.$store.state.gradient.steps.number)
      if (stepsNumber === undefined || stepsNumber < 2) {
        stepsNumber = 2
      } else if (stepsNumber > 100) {
        stepsNumber = 100
      }

      // Get the colorstops
      const colorStopsCoordinates =
        this.$store.state.gradient.settings.easingFunction === 'cubic-bezier'
          ? cubicCoordinates(...this.getStoreBezierCoordinates(), 15)
          : stepsCoordinates(stepsNumber, this.$store.state.gradient.steps.skip)

      this.$store.commit('updateStopCoordinates', colorStopsCoordinates)
      const colors = [this.getStoreHsla1(), this.getStoreHsla2()]

      // Browsers don't really agree how to treat gradients that go from one hue to alpha 0 of another hue...
      const correctTransparentColors = colors.map((color, i) => {
        return chroma(color).alpha() === 0
          ? chroma(colors[Math.abs(i - 1)]).alpha(0)
          : chroma(color)
      })

      // Mix them colors and write it as sensible css
      const cssColorStops = colorStopsCoordinates.map(stop => {
        let mixedColor = chroma.mix(
          ...correctTransparentColors,
          stop.y,
          colorMode
        )
        mixedColor = mixedColor.alpha(rounded(mixedColor.alpha(), 3))
        return `${mixedColor
          .css('hsl')
          .split(',')
          .join(', ')} ${rounded(stop.x * 100, 1)}%`
      })
      const direction = this.getStoreDirection()
      return preview
        ? `linear-gradient(
    ${direction},
    ${cssColorStops.join(',\n    ')}
  );`
        : `linear-gradient(${direction}, ${cssColorStops.join(', ')})`
    },
    getStoreDirection() {
      const deg = rounded(this.$store.state.gradient.direction.deg)
      const str = shorthands.direction[deg]
        ? shorthands.direction[deg]
        : `${deg}deg`
      return str
    },
    getStoreBezierCoordinates() {
      const x1 = rounded(this.$store.state.gradient.ease1.x, 2)
      const y1 = rounded(this.$store.state.gradient.ease1.y, 2)
      const x2 = rounded(this.$store.state.gradient.ease2.x, 2)
      const y2 = rounded(this.$store.state.gradient.ease2.y, 2)
      return [x1, y1, x2, y2]
    },
    getStoreHsla(color) {
      const hue = rounded(this.$store.state.gradient[color].h)
      const sat = rounded(this.$store.state.gradient[color].s)
      const light = rounded(this.$store.state.gradient[color].l)
      const alpha = rounded(this.$store.state.gradient[color].a, 2)
      return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
    },
    getStoreHsla1() {
      return this.getStoreHsla('color1')
    },
    getStoreHsla2() {
      return this.getStoreHsla('color2')
    },
  },
}
