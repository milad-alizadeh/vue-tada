import './assets/style.css'
import { App } from 'vue'
import {
  ElementOptions,
  ObserverOptions,
  AnimationTypes,
  TadaPlugin,
} from './types'
import createDirective from './directive'

export const plugin: TadaPlugin = {
  install: (app: App, options: ElementOptions) => {
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

    // Merge default options with user options
    globalElementOptions = { ...globalElementOptions, ...options }
    globalObserverOptions = { ...globalObserverOptions, ...options }

    // Register directive
    app.directive(
      'tada',
      createDirective(globalObserverOptions, globalElementOptions)
    )
  },
}

export { ElementOptions, ObserverOptions, AnimationTypes } from './types'
