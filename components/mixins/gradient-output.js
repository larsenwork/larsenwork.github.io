import easingStopsCubic from './gradient-stops-cubic'
import easingStopsSteps from './gradient-stops-steps'
import easingGradientDirections from './gradient-directions'
import chroma from 'chroma-js'

export default {
  computed: {
    gradientDirection () {
      return this.getStoreDirection()
    },
    gradientColor1 () {
      return this.getStoreHsla1()
    },
    gradientColor2 () {
      return this.getStoreHsla2()
    },
    gradientFunction () {
      if (this.$store.state.gradient.settings.easingFunction === 'cubic-bezier') {
        return `cubic-bezier(${this.getStoreBezierCoordinates().join(', ')})`
      } else {
        return `steps(${this.$store.state.gradient.steps.number}, ${this.$store.state.gradient.steps.skip})`
      }
    }
  },
  methods: {
    gradientCalc (colorMode = 'lrgb') {
      const colorStops = this.$store.state.gradient.settings.easingFunction === 'cubic-bezier'
        ? easingStopsCubic(this.getStoreBezierCoordinates())
        : easingStopsSteps(this.$store.state.gradient.steps.number, this.$store.state.gradient.steps.skip)
      console.log(colorStops)
      const colors = [
        this.getStoreHsla1(),
        this.getStoreHsla2()
      ]
      const correctTransparentColors = colors.map((color, i) => {
        return chroma(color).alpha() === 0
          ? chroma(colors[Math.abs(i - 1)]).alpha(0)
          : chroma(color)
      })
      const cssColorStops = colorStops.map(stop => {
        let mixedColor = chroma.mix(...correctTransparentColors, stop.mix, colorMode)
        mixedColor = mixedColor.alpha(rounded(mixedColor.alpha(), 3))
        return `${mixedColor.css('hsl')} ${stop.position}`
      })
      const direction = this.getStoreDirection()
      const gradientCSS = `linear-gradient(${direction}, ${cssColorStops.join(', ')})`
      return gradientCSS
    },
    getStoreDirection () {
      const deg = rounded(this.$store.state.gradient.direction.deg)
      const str = easingGradientDirections[deg]
        ? easingGradientDirections[deg]
        : `${deg}deg`
      return str
    },
    getStoreBezierCoordinates () {
      const x1 = rounded(this.$store.state.gradient.ease1.x, 2)
      const y1 = rounded(this.$store.state.gradient.ease1.y, 2)
      const x2 = rounded(this.$store.state.gradient.ease2.x, 2)
      const y2 = rounded(this.$store.state.gradient.ease2.y, 2)
      return [x1, y1, x2, y2]
    },
    getStoreHsla (color) {
      const hue = rounded(this.$store.state.gradient[color].h)
      const sat = rounded(this.$store.state.gradient[color].s)
      const light = rounded(this.$store.state.gradient[color].l)
      const alpha = rounded(this.$store.state.gradient[color].a, 2)
      return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
    },
    getStoreHsla1 () {
      return this.getStoreHsla('color1')
    },
    getStoreHsla2 () {
      return this.getStoreHsla('color2')
    }
  }
}

const rounded = (number, precission = 0) => +number.toFixed(precission)
