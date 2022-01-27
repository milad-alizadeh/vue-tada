import { App } from 'vue'
import { ElementOptions, ObserverOptions, TadaPlugin } from '../types'
import createDirective from '../directive'
import { globalElementOptions, globalObserverOptions } from '../defaults'
import { mergeOptions } from '../helpers'
const DIRECTIVE_NAME = 'tada'

export const plugin: TadaPlugin = {
  install: (app: App, options: ElementOptions) => {
    const mergedElementOptions: ElementOptions = mergeOptions(
      globalElementOptions,
      options
    )

    const mergedObserverOptions: ObserverOptions = mergeOptions(
      globalObserverOptions,
      options.observerOptions
    )
    // Register directive
    app.directive(
      DIRECTIVE_NAME,
      createDirective(mergedElementOptions, mergedObserverOptions)
    )
  },
}

export default plugin
