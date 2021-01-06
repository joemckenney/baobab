import { Theme } from '../../theme/types'
import { BorderStyle, FourDimensionalSizeProperty } from './types'

export const cssFrom4DSizeProperty = (
  theme: Theme,
  size?: FourDimensionalSizeProperty
): 0 | string => {
  if (!size) {
    return 0
  }

  return Array.isArray(size)
    ? size.map((s) => theme.size[s]).join(' ')
    : theme.size[size]
}

export const cssFrom3DBorderProperty = (
  theme: Theme,
  border?: BorderStyle
): string => {
  if (!border) {
    return 'none'
  }

  const b = border
    .trim()
    .split(' ')
    .map((s) => s.trim())

  if (b.length === 1) {
    return border[0]
  }

  if (!isNaN(b[0])) {
    return [theme.size[b[0]], b[1], b[2]].filter((n) => n).join(' ')
  }

  return b.join(' ')
}
