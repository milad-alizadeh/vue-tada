import { ObserverOptions, ElementOptions } from '../types'
import { kebabCase } from '../helpers'

export default class Tada {
  private animatedClass = 'tada-animated'
  private entryData: Map<Element, ElementOptions> = new Map()
  private observer: IntersectionObserver | null = null
  private root: Element | Document | null = null
  private rootMargin = '0% 0%'
  private threshold = 0.5

  constructor(options: ObserverOptions) {
    Object.assign(this, options)
    this.observer = this.createObserver()
    this.entryData = new Map()
  }

  /**
   * Create intersection observer
   */
  private createObserver(): IntersectionObserver {
    const { root, rootMargin, threshold } = this
    return new IntersectionObserver((entries) => this.onIntersection(entries), {
      root,
      rootMargin,
      threshold,
    })
  }

  /**
   * Intersection observer callback
   * @param entries Intersection observer entries
   */
  private onIntersection(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      const target: HTMLElement = entry.target as HTMLElement
      const options = this.getElementOptions(target)
      if (!options) return

      const { once, callback, animationDisabled } = options
      const targetElement = this.getTarget(target, options)

      // Execute callback
      if (callback) callback(entry, { ...options, target: targetElement })

      // If element is intersecting
      if (entry.intersectionRatio >= this.threshold) {
        if (!animationDisabled) this.animate(targetElement)
        this.addIntersectingClasses(targetElement, options.intersectingClasses)
        this.removeNonIntersectingClasses(
          targetElement,
          options.nonIntersectingClasses
        )

        // Unobserve if it's a one time animation
        if (once) this.unobserve(target)
      } else if (!once) {
        if (!animationDisabled) this.reverseAnimation(targetElement)

        this.addNonIntersectingClasses(
          targetElement,
          options.nonIntersectingClasses
        )

        this.removeIntersectingClasses(
          targetElement,
          options.intersectingClasses
        )
      }
    })
  }

  /**
   * Reemove intersecting classes from element
   * @param el Element
   * @param classList Class list
   */
  private removeIntersectingClasses(
    el: HTMLElement,
    classList: string[]
  ): void {
    if (classList.length) {
      classList.forEach((className) => el.classList.remove(className))
    }
  }

  /**
   * Reemove non-intersecting classes from element
   * @param el Element
   * @param classList Class list
   */
  private removeNonIntersectingClasses(
    el: HTMLElement,
    classList: string[]
  ): void {
    if (classList.length) {
      classList.forEach((className) => el.classList.remove(className))
    }
  }

  /**
   * add intersecting classes to element
   * @param el Element
   * @param classList Class list
   */
  private addIntersectingClasses(el: HTMLElement, classList: string[]): void {
    if (classList.length) {
      classList.forEach((className) => el.classList.add(className))
    }
  }

  /**
   * add intersecting classes to element
   * @param el Element
   * @param classList Class list
   */
  private addNonIntersectingClasses(
    el: HTMLElement,
    classList: string[]
  ): void {
    if (classList.length) {
      classList.forEach((className) => el.classList.add(className))
    }
  }

  /**
   * Unobserve element
   * @param el Element
   */
  public unobserve(el: HTMLElement): void {
    this.observer?.unobserve(el)
  }

  /**
   * Get element options
   * @param el Element
   * @param options Element options
   */
  public observe(el: HTMLElement, options: ElementOptions): void {
    if (!options.animationDisabled) this.setAnimationOptions(el, options)
    this.setElementOptions(el, options)
    this.observer?.observe(el)
  }

  /**
   * Disconnect and clear intersection observer
   */
  public clearObserver(): void {
    this.observer?.disconnect()
    this.observer = null
  }

  /**
   * Reverse animation
   * @param el Element
   */
  private reverseAnimation(el: HTMLElement): void {
    el.classList.remove(this.animatedClass)
  }

  /**
   * Animates element
   * @param el Element
   */
  private animate(el: HTMLElement): void {
    el.classList.add(this.animatedClass)
  }

  /**
   * Get target element
   * @param el Element
   * @param option Element options
   * @returns {HTMLElement}
   */
  private getTarget(el: HTMLElement, option: ElementOptions): HTMLElement {
    const { target } = option
    let targetElement

    if (typeof target === 'function') {
      targetElement = target()
      if (targetElement instanceof HTMLElement === false) {
        if (!targetElement) {
          throw new TypeError(
            'Target element is not defined or is not currently rendered in DOM'
          )
        }
        throw new TypeError(
          `Target attribute needs to be a HTMLElement not a Vue component. Vue 3 supports multiple root elements so you need to specifically define and expose the refs in the component https://v3.vuejs.org/api/sfc-script-setup.html#defineexpose.`
        )
      }
    } else {
      targetElement = el
    }

    return targetElement
  }

  /**
   * Set animation options for element or its children
   * @param el Element
   * @param options Element options
   */
  private setAnimationOptions(el: HTMLElement, options: ElementOptions): void {
    const {
      animation,
      delay,
      duration,
      easing,
      transformScale,
      transformDistance,
    } = options

    const targetElement = this.getTarget(el, options)

    if (animation) targetElement.classList.add(kebabCase(`tada-${animation}`))
    if (delay) targetElement.style.setProperty('--tada-delay', `${delay}ms`)
    if (transformDistance) {
      targetElement.style.setProperty(
        '--tada-transform-distance',
        `${transformDistance}`
      )
    }
    if (transformScale) {
      targetElement.style.setProperty(
        '--tada-transform-scale',
        `${transformScale}`
      )
    }
    if (duration) {
      targetElement.style.setProperty('--tada-duration', `${duration}ms`)
    }
    if (easing) {
      targetElement.style.setProperty('--tada-easing', `var(--${easing})`)
    }
  }

  /**
   * Get element options
   * @param el Element
   * @returns {ElementOptions}
   */
  public getElementOptions(el: HTMLElement): ElementOptions | null {
    return this.entryData?.get(el) ?? null
  }

  /**
   * Delete element options
   * @param el Element
   */
  public deleteElementOptions(el: HTMLElement): void {
    this.entryData?.delete(el)
  }

  /**
   * Delete element options
   * @param el Element
   */
  public getSize(): number {
    return this.entryData?.size
  }

  /**
   * Set element options
   * @param el Element
   * @param options Element options
   * @returns {ElementOptions}
   */
  private setElementOptions(el: HTMLElement, options: ElementOptions): void {
    this.entryData?.set(el, options)
  }
}
