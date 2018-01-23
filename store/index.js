import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuVisible: false,
      overlayVisible: false,
      parentBounding: {},
      notifications: [],
      mouseElement: '',
      gradient: {
        editorActive: '',
        direction: {
          deg: 180,
          x: 0.5,
          y: 0.2
        },
        ease1: {
          x: 0.42,
          y: 0
        },
        ease2: {
          x: 0.58,
          y: 1
        },
        color1: {
          h: 0,
          s: 0,
          l: 0,
          a: 0.7,
          hsv: {
            s: 0,
            v: 0
          }
        },
        color2: {
          h: 0,
          s: 0,
          l: 0,
          a: 0,
          hsv: {
            s: 0,
            v: 0
          }
        }
      }
    },
    mutations: {
      showMenu (state) {
        state.menuVisible = true
      },
      hideMenu (state) {
        state.menuVisible = false
      },
      showOverlay (state) {
        state.overlayVisible = true
      },
      hideOverlay (state) {
        state.overlayVisible = false
      },
      addNotification (state, msg) {
        state.notifications = [msg, ...state.notifications]
      },
      showGradientEditor (state, editor) {
        state.gradient.editorActive = editor
      },
      hideGradientEditor (state) {
        state.gradient.editorActive = ''
        state.gradient.editorValue = ''
      },
      parentBounding (state, obj) {
        state.parentBounding = obj
      },
      mouseDown (state, element) {
        state.mouseElement = element
      },
      mouseUp (state) {
        state.mouseElement = ''
      },
      updateXY (state, obj) {
        if (obj.element.includes('ease') || obj.element.includes('direction')) {
          state.gradient[`${obj.element}`].x = obj.x
          state.gradient[`${obj.element}`].y = obj.y
          if (obj.element.includes('direction')) {
            state.gradient[`${obj.element}`].deg = xy2deg(obj.x, obj.y)
          }
        } else if (obj.element.includes('color')) {
          const hsvS = obj.x
          const hsvV = obj.y
          const hsl = sv2sl(hsvS, hsvV)
          state.gradient[`${obj.element}`].s = hsl[0] * 100
          state.gradient[`${obj.element}`].l = hsl[1] * 100
          state.gradient[`${obj.element}`].hsv.s = hsvS * 100
          state.gradient[`${obj.element}`].hsv.v = hsvV * 100
        }
      }
    }
  })
}

function sv2sl (s, v) {
  var l = (2 - s) * v / 2
  if (l !== 0) {
    if (l === 1) {
      s = 0
    } else if (l < 0.5) {
      s = s * v / (l * 2)
    } else {
      s = s * v / (2 - l * 2)
    }
  }
  return [s, l]
}

function xy2deg (x, y) {
  const deltaX = 0.5 - x
  const deltaY = y - 0.5
  const rad = Math.atan2(deltaY, deltaX)
  const deg = rad * (180 / Math.PI)
  const correctedDeg = (270 + deg) % 360
  const errorMargin = 5
  const errorMarginFrom45 = correctedDeg % 45
  const errorCorrectedDeg = errorMarginFrom45 > (45 - errorMargin)
    ? correctedDeg + 45 - errorMarginFrom45
    : errorMarginFrom45 < errorMargin
      ? correctedDeg - errorMarginFrom45
      : correctedDeg
  return errorCorrectedDeg
}

export default createStore
