import { SizeKey, ColorKey, ColorThemeKey, Theme } from '../../theme/types'
import { BorderStyle, FourDimensionalSizeProperty } from './types'

import { color } from '../../styles/themes/fruity/color'

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
  /*
   * style
   * width style
   * style color
   * width style color
   *
   */

  if (!border) {
    return 'none'
  }

  const tokens = border
    .trim()
    .split(' ')
    .map((s) => s.trim())

  if (tokens.length === 1) {
    return tokens.join(' ')
  }

  if (tokens.length === 2) {
    if (
      !isNaN(tokens[0] as any) ||
      ['thin', 'medium', 'thick'].includes(tokens[0])
    ) {
      return [theme.size[parseInt(tokens[0], 10) as SizeKey], tokens[1]].join(
        ' '
      )
    } else {
      const [color, key] = tokens[1].split('.')
      return [
        tokens[0],
        theme.color[color as ColorThemeKey][(key as unknown) as ColorKey],
      ].join(' ')
    }
  }

  if (tokens.length === 3) {
    const width = theme.size[parseInt(tokens[0], 10) as SizeKey]
    const style = tokens[1]
    const [color, key] = tokens[2].split('.')

    return [
      width,
      style,
      theme.color[color as ColorThemeKey][(key as unknown) as ColorKey],
    ].join(' ')
  }

  return 'none'
}
