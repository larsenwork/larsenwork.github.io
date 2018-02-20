import Vuex from 'vuex'
import { sv2sl, xy2deg, angle2rad } from './helpers'

const createStore = () => {
  return new Vuex.Store({
    state: {
      navigationVisible: false,
      overlayVisible: false,
      parentBounding: {},
      notifications: [],
      mouseElement: '',
      gradient: {
        editorActive: '',
        cssOutput: '',
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
        steps: {
          number: 4,
          skip: 'skip-none'
        },
        color1: {
          h: 330,
          s: 100,
          l: 45,
          a: 1,
          hsv: {
            s: 100,
            v: 90
          }
        },
        color2: {
          h: 210,
          s: 100,
          l: 45,
          a: 1,
          hsv: {
            s: 100,
            v: 90
          }
        },
        colorStopCoordinates: [],
        settings: {
          colorMode: 'lrgb',
          easingFunction: 'cubic-bezier'
        }
      }
    },
    mutations: {
      showNavigation(state) {
        state.navigationVisible = true
      },
      hideNavigation(state) {
        state.navigationVisible = false
      },
      showOverlay(state) {
        state.overlayVisible = true
      },
      hideOverlay(state) {
        state.overlayVisible = false
      },
      addNotification(state, msg) {
        state.notifications = [msg, ...state.notifications]
      },
      showGradientEditor(state, editor) {
        state.gradient.editorActive = editor
      },
      hideGradientEditor(state) {
        state.gradient.editorActive = ''
      },
      parentBounding(state, obj) {
        state.parentBounding = obj
      },
      mouseDown(state, element) {
        state.mouseElement = element
      },
      mouseUp(state) {
        state.mouseElement = ''
      },
      updateStopCoordinates(state, colorstops) {
        state.gradient.colorStopCoordinates = colorstops
      },
      updateXY(state, obj) {
        if (obj.element.includes('ease')) {
          state.gradient[`${obj.element}`].x = obj.x
          state.gradient[`${obj.element}`].y = obj.y
        } else if (obj.element.includes('direction')) {
          const center = 0.5
          const radius = 0.3
          const deg = xy2deg(obj.x, obj.y)
          const mathDeg = 360 - (deg + 270) % 360
          const radians = angle2rad(mathDeg)
          state.gradient[`${obj.element}`].x = (
            Math.cos(radians) * radius +
            center
          ).toFixed(5)
          state.gradient[`${obj.element}`].y = (
            Math.sin(radians) * radius +
            center
          ).toFixed(5)
          state.gradient[`${obj.element}`].deg = deg
        } else if (obj.element.includes('color')) {
          const hsvS = obj.x
          const hsvV = obj.y
          const hsl = sv2sl(hsvS, hsvV)
          const sat = hsl[0] * 100
          const light = hsl[1] * 100
          state.gradient[`${obj.element}`].s = sat
          state.gradient[`${obj.element}`].l = light
          state.gradient[`${obj.element}`].hsv.s = hsvS * 100
          state.gradient[`${obj.element}`].hsv.v = hsvV * 100
        }
      }
    }
  })
}

export default createStore
