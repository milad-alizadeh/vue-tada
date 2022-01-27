import { mergeOptions, kebabCase } from '.'

interface Book {
  title: string
  author: string
  pages: number
}

describe('helpers', () => {
  describe('mergeOptions', () => {
    test('overrides the key of the second argument', () => {
      const object1 = <Book>{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 200,
      }

      const object2 = <Book>{
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoyevsky',
        pages: 500,
      }

      const results = mergeOptions(object1, object2)
      expect(results).toEqual({
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoyevsky',
        pages: 500,
      })
    })

    test('merges partially correctly', () => {
      const object1 = <Book>{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
      }

      const object2 = <Book>{
        pages: 500,
      }

      const results = mergeOptions(object1, object2)
      expect(results).toEqual({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 500,
      })
    })

    test('merges wrong type correctly', () => {
      const object1 = <Book>{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
      }
      const object2 = null
      const results = mergeOptions(object1, object2)

      expect(results).toEqual({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
      })
    })

    test('merges wrong type correctly', () => {
      const object1 = <Book>{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
      }
      const object2 = null
      const results = mergeOptions(object2, object1)

      expect(results).toEqual({
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
      })
    })
  })
  describe('kebabCase', () => {
    test('converts a string to kebab case', () => {
      expect(kebabCase('The Great Gatsby')).toBe('the-great-gatsby')
    })

    test('PascalCase to kebab-case', () => {
      expect(kebabCase('PascalCase')).toBe('pascal-case')
    })
    test('camelCase to kebab-case', () => {
      expect(kebabCase('camelCase')).toBe('camel-case')
    })

    test('snake_case to kebab-case', () => {
      expect(kebabCase('snake_case')).toBe('snake-case')
    })
  })
})
