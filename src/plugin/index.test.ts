import plugin from '.'
import * as helpers from '../helpers'
import { App, Directive } from 'vue'
import { defaultElementOptions, defaultObserverOptions } from '../defaults'
import { DIRECTIVE_NAME } from '.'
import * as directive from '../directive'

jest.mock('../directive', () => {
  return {
    createDirective: jest.fn().mockReturnValue({}),
  }
})

jest.mock('../helpers', () => {
  return {
    mergeOptions: jest.fn().mockReturnValue({}),
  }
})

describe('plugin', () => {
  let app: App
  beforeEach(() => {
    app = <App>{
      directive: jest.fn() as Directive,
    }
  })

  test('merges both element and observer options', () => {
    plugin.install(app, { delay: 1000 })

    expect(helpers.mergeOptions).toHaveBeenCalledWith(defaultElementOptions, {
      delay: 1000,
    })
    expect(helpers.mergeOptions).toHaveBeenCalledWith(
      defaultObserverOptions,
      undefined
    )
    expect(helpers.mergeOptions).toHaveBeenCalledTimes(2)
  })
  test('call the directive with correct options', () => {
    plugin.install(app, {})

    expect(directive.createDirective).toHaveBeenCalledWith({}, {})
    expect(app.directive).toHaveBeenCalledWith(DIRECTIVE_NAME, {})
  })
})
