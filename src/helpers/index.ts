export const kebabCase = (s: string): string => {
  return s
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/\s|(_)/g, '-')
}

export const mergeOptions = <T>(object1: T, object2: T): T => {
  if (!object2) return object1
  if (!object1) return object2
  return Object.assign({}, object1, object2)
}
