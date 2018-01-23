export default {
  computed: {
    gradientDirection () {
      const deg = rounded(this.$store.state.gradient.direction.deg)
      return `${deg}deg`
    },
    gradientColor1 () {
      return this.hslaMe('color1')
    },
    gradientColor2 () {
      return this.hslaMe('color2')
    },
    gradientEase () {
      const x1 = rounded(this.$store.state.gradient.ease1.x, 2)
      const y1 = rounded(this.$store.state.gradient.ease1.y, 2)
      const x2 = rounded(this.$store.state.gradient.ease2.x, 2)
      const y2 = rounded(this.$store.state.gradient.ease2.y, 2)
      return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`
    }
  },
  methods: {
    hslaMe (color) {
      const hue = rounded(this.$store.state.gradient[color].h)
      const sat = rounded(this.$store.state.gradient[color].s)
      const light = rounded(this.$store.state.gradient[color].l)
      const alpha = rounded(this.$store.state.gradient[color].a, 2)
      return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
    }
  }
}

const rounded = (number, precission = 0) => +number.toFixed(precission)
