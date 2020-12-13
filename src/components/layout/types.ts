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

export type BorderProperty =
  | LineStyle
  | [LineWidth, LineStyle]
  | [LineStyle, LineColor]
  | [LineWidth, LineStyle, LineColor]
