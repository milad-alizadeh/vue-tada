import plugin from '.'
import { ElementOptions, ObserverOptions, AnimationTypes } from '../types'

describe('plugin', () => {
  describe('install', () => {
    test('merges the user options correctly', () => {
      const userOptions: ElementOptions = {
        animation: AnimationTypes.Fade,
        delay: 300,
        duration: 500,
        nonenterClasses,
      }
    })
  })
})
