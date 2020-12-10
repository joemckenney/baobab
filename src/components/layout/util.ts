import { Theme } from '../../theme/types'
import { FourDimensionalSizeProperty } from './types'

export const cssFrom4DSizeProperty = (
  theme: Theme,
  size?: FourDimensionalSizeProperty
) => {
  if (!size) {
    return 0
  }

  return Array.isArray(size)
    ? size.map(s => theme.size[s]).join(' ')
    : theme.size[size]
}
