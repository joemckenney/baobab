import { SizeKey } from '../../theme/types'

export type FourDimensionalSizeProperty =
  | SizeKey
  | [SizeKey, SizeKey]
  | [SizeKey, SizeKey, SizeKey]
  | [SizeKey, SizeKey, SizeKey, SizeKey]

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

export type LineWidth = SizeKey | 'thin' | 'medium' | 'thick'
export type LineColor = string

export type BorderStyle =
  | `${LineStyle}`
  | `${LineWidth} ${LineStyle}`
  | `${LineStyle} ${LineColor}`
  | `${LineWidth} ${LineStyle} ${LineColor}`

export interface BorderProps {
  border?: BorderStyle
  bt?: BorderStyle
  br?: BorderStyle
  bb?: BorderStyle
  bl?: BorderStyle
}
