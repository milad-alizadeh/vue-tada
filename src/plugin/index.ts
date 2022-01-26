import { App } from 'vue'
import { ElementOptions, ObserverOptions, TadaPlugin } from '../types'
import createDirective from '../directive'
import { globalElementOptions, globalObserverOptions } from '../defaults'
import 
const DIRECTIVE_NAME = 'tada'

export const plugin: TadaPlugin = {
  install: (app: App, options: ElementOptions) => {
    const 
    // Register directive
    app.directive(
      DIRECTIVE_NAME,
      createDirective(mergedElementOptions, mergedObserverOptions)
    )
  },
}

export default plugin
