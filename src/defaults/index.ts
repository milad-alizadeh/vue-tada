import { ElementOptions, ObserverOptions } from '../types'

export const defaultElementOptions: ElementOptions = {
  animation: 'fade',
  animationDisabled: false,
  enterClasses: [],
  exitClasses: [],
  once: false,
}

export const defaultObserverOptions: ObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}
