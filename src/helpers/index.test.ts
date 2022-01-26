import { mergeOptions, kebabCase } from '.'

describe('helpers', () => {
  describe('mergeOptions', () => {
    test('merges keys correctly', () => {
      const object1 = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
      }

      const object2 = {
        key1: 'a',
        key2: 'b',
        key3: 'c',
      }

      const results = mergeOptions(object1, object2)
      expect(results).toEqual({
        key1: 'a',
        key2: 'b',
        key3: 'c',
      })
    })
  })
})
