import { Directive, DirectiveBinding, nextTick } from 'vue'
import Tada from '../model'
import { ElementOptions, ObserverOptions } from '../types'

// Keep track of all observer instances
const observersMap = new Map<string, Tada>()

const createDirective = (
  globalObserverOptions: ObserverOptions,
  globalElementOptions: ElementOptions
): Directive => ({
  /**
   * Observe element
   * @param el Element
   * @param binding Directive binding
   */
  beforeMount: async (el: HTMLElement, binding: DirectiveBinding) => {
    // Wait for any target to be resolved
    await nextTick()

    // Merge default observer options and options from directive
    const observerOptions: ObserverOptions = {
      ...globalObserverOptions,
      ...binding.value?.observerOptions,
    }

    // Merge default element options and options from directive
    const elementOptions: ElementOptions = {
      ...globalElementOptions,
      ...binding.value,
    }

    // Stringify observer options
    const observerKey: string = JSON.stringify(observerOptions)
    let observer = observersMap.get(observerKey)

    // Create observer if it doesn't exist
    if (!observer) {
      observer = new Tada(observerOptions)
      observersMap.set(observerKey, observer)
    }

    observer.observe(el, elementOptions)
  },

  /**
   * Remove element from observer when it's being destroyed
   * @param el Element
   */
  unmounted: (el: HTMLElement) => {
    const iterator = observersMap.entries()
    let found: ElementOptions | null = null

    // Find the observer that has this element
    while (!found) {
      const [key, observer]: [string, Tada] = iterator.next().value
      found = observer.getElementOptions(el)

      // Remove element from observer
      if (found) {
        observer.deleteElementOptions(el)
        observer.unobserve(el)
      }

      // If there are no more elements in the observer, delete it
      if (!observer.getSize()) {
        observer.clearObserver()
        observersMap.delete(key)
      }
    }
  },
})

export default createDirective
