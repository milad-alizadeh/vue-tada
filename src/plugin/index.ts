import { App } from 'vue'
import { ElementOptions, ObserverOptions, TadaPlugin } from '../types'
import { createDirective } from '../directive'
import { defaultElementOptions, defaultObserverOptions } from '../defaults'
import { mergeOptions } from '../helpers'

export const DIRECTIVE_NAME = 'tada'

export const plugin: TadaPlugin = {
  install: (app: App, options?: ElementOptions) => {
    const globalElementOptions = mergeOptions(
      defaultElementOptions,
      options
    ) as ElementOptions

    const globalObserverOptions = mergeOptions(
      defaultObserverOptions,
      options?.observerOptions
    ) as ObserverOptions

    // Register directive
    app.directive(
      DIRECTIVE_NAME,
      createDirective(globalElementOptions, globalObserverOptions)
    )
  },
}

export default plugin
