import './assets/style.css'
import { App, Plugin } from 'vue'
import Tada from './model'
import { ElementOptions, ObserverOptions, AnimationTypes } from './types'
import createDirective from './directive'

// Keep track of all observer instances
const observersMap = new Map<string, Tada>()

// Default options
let globalElementOptions: ElementOptions = {
  animation: AnimationTypes.Fade,
  animationDisabled: false,
  intersectingClasses: [],
  nonIntersectingClasses: [],
  once: false,
}

let globalObserverOptions: ObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}

export const plugin: Plugin = {
  install: (app: App, options: ElementOptions) => {
    // Merge default options with user options
    globalElementOptions = { ...globalElementOptions, ...options }
    globalObserverOptions = { ...globalObserverOptions, ...options }

    // Register directive
    app.directive('tada', createDirective(globalObserverOptions, globalElementOptions))
  },
}

export { ElementOptions, ObserverOptions, AnimationTypes } from './types'