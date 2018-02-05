import Vuex from 'vuex'
import { sv2sl, xy2deg } from './helpers'

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
        settingsVisible: false,
        cssOutput: '',
        direction: {
          deg: 0,
          x: 0.5,
          y: 0.8
        },
        ease1: {
          x: 0.45,
          y: 0
        },
        ease2: {
          x: 0.5,
          y: 0.5
        },
        steps: {
          number: 4,
          skip: 'skip-none'
        },
        color1: {
          h: 330,
          s: 100,
          l: 45,
          a: 0,
          hsv: {
            s: 100,
            v: 90
          }
        },
        color2: {
          h: 330,
          s: 100,
          l: 45,
          a: 1,
          hsv: {
            s: 100,
            v: 90
          }
        },
        settings: {
          colorMode: 'lrgb',
          easingFunction: 'cubic-bezier'
        }
      }
    },
    mutations: {
      showNavigation (state) {
        state.navigationVisible = true
      },
      hideNavigation (state) {
        state.navigationVisible = false
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
        state.gradient.settingsVisible = false
      },
      hideGradientEditor (state) {
        state.gradient.editorActive = ''
      },
      toggleGradientSettings (state) {
        state.gradient.settingsVisible = !state.gradient.settingsVisible
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
