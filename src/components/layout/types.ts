import { ColorTheme, ColorKey, SizeKey } from '../../theme/types'

export type FourDimensionalSizeProperty =
  | `${SizeKey}`
  | `${SizeKey},${SizeKey}`
  | `${SizeKey},${SizeKey},${SizeKey}`
  | `${SizeKey},${SizeKey},${SizeKey},${SizeKey}`

export type LineStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

export type OverFlowValues = 'auto' | 'hidden' | 'overlay' | 'visible'
export type OverFlow =
  | OverFlowValues
  | `${'x' | 'y'}: ${OverFlowValues};`
  | `x: ${OverFlowValues}; y: ${OverFlowValues};`

export type LineWidth = SizeKey | 'thin' | 'medium' | 'thick'
export type LineColor = string

export type BorderStyle =
  | `${LineStyle}`
  | `${LineWidth} ${LineStyle}`
  | `${LineStyle} ${keyof ColorTheme}.${ColorKey}`
  | `${LineWidth} ${LineStyle} ${keyof ColorTheme}.${ColorKey}`

export interface BorderProps {
  border?: BorderStyle
  bt?: BorderStyle
  br?: BorderStyle
  bb?: BorderStyle
  bl?: BorderStyle
}
