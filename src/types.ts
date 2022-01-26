import { App } from 'vue'

export enum AnimationTypes {
  Fade = 'fade',
  FadeDown = 'fade-down',
  FadeLeft = 'fade-left',
  FadeRight = 'fade-right',
  FadeUp = 'fade-up',
  ZoomIn = 'zoom-in',
  ZoomOut = 'zoom-out',
}

export interface ObserverOptions {
  /** The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API  */
  root: Element | Document | null
  /** Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API */
  rootMargin: string
  /** Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API*/
  threshold: number | number[]
}

export interface ElementOptions {
  /** Whether the default animation properties should be applied. Useful when using custom animation or callbacks */
  animationDisabled?: boolean
  /** The animation type to use */
  animation?: AnimationTypes
  /** The callback to call when the element is intersecting or not intersecting */
  callback?: (entry: IntersectionObserverEntry, options: ElementOptions) => void
  /** The delay to apply before the animation starts */
  delay?: number
  /** The duration of the animation */
  duration?: number
  /** The distance that the element should translate during the animation. Only works with fade-up, fade-down, fade-left and fade-right. 'All css units are supported' */
  transformDistance?: string
  /** The amount that the element should scale during the animation using . Only works with zoom-in and zoom-out. Should between 0 and 1. i.e 0.2 20% scale for */
  transformScale?: number
  /** The easing of animation. */
  easing?: string
  /** The css classes to apply when the element is intersecting */
  intersectingClasses: string[]
  /** The css classes to apply when the element is not intersecting */
  nonIntersectingClasses: string[]
  /** Intersector observer options */
  observerOptions?: IntersectionObserver
  /** Whether the animation should only be applied once or should be reversed when scrolling back */
  once?: boolean
  /** The target of the animation. Used when wanting to animate a target element based on the intersection of another element */
  target?: (() => HTMLElement) | HTMLElement
}

export interface tadaPlugin {
  install: (app: App) => void
}
