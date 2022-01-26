import { ElementOptions, ObserverOptions, AnimationTypes } from '../types'

export const globalElementOptions: ElementOptions = {
  animation: AnimationTypes.Fade,
  animationDisabled: false,
  enterClasses: [],
  exitClasses: [],
  once: false,
}

export const globalObserverOptions: ObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5,
}
