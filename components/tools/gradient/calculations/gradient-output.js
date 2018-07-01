import * as shorthands from './gradient-shorthands'
import * as chroma from 'chroma-js'
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
    gradientCalc(
      colorMode = 'lrgb',
      preview = false,
      colors = [this.getStoreHsla1(), this.getStoreHsla2()],
      easing = this.$store.state.gradient.settings.easingFunction
    ) {
      // Because number input in Safari is a bitch...
      let stepsNumber = Number(this.$store.state.gradient.steps.number)
      if (stepsNumber === undefined || stepsNumber < 2) {
        stepsNumber = 2
      } else if (stepsNumber > 100) {
        stepsNumber = 100
      }

      // Get the colorstops
      const colorStopsCoordinates =
        easing === 'cubic-bezier'
          ? cubicCoordinates(...this.getStoreBezierCoordinates(), 15)
          : stepsCoordinates(stepsNumber, this.$store.state.gradient.steps.skip)

      this.$store.commit('updateStopCoordinates', colorStopsCoordinates)

      // Browsers don't really agree how to treat gradients that go from one hue to alpha 0 of another hue...
      const [color1, color2] = colors.map((color, i) => {
        return chroma(color).alpha() === 0
          ? chroma(colors[Math.abs(i - 1)]).alpha(0)
          : chroma(color)
      })

      // Mix them colors and write it as sensible css
      const cssColorStops = colorStopsCoordinates.map(stop => {
        let mixedColor
        if (colorMode === 'squared') {
          const color1rgba = color1.rgba(false)
          const color2rgba = color2.rgba(false)
          const colorMix = color1rgba.map((num, i) => {
            const value = Math.sqrt(
              num ** 2 * (1 - stop.y) + color2rgba[i] ** 2 * stop.y
            )
            return i < 3 ? rounded(value) : value
          })
          console.log(colorMix)
          mixedColor = chroma(`rgba(${colorMix.join(',')})`)
        } else {
          mixedColor = chroma.mix(color1, color2, stop.y, colorMode)
        }
        mixedColor = mixedColor.alpha(rounded(mixedColor.alpha(), 3))
        return `${mixedColor
          .css('hsl')
          .split(',')
          .join(', ')} ${rounded(stop.x * 100, 1)}%`
      })
      const direction = this.getStoreDirection()
      return preview
        ? `linear-gradient(\n    ${direction},\n    ${cssColorStops.join(
            ',\n    '
          )}\n  );`
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
