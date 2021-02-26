import { Spacing, Color } from '../../theme/types'

type Size = keyof Spacing

export type FourDimensionalSizeProperty =
  | `${Size}`
  | `${Size},${Size}`
  | `${Size},${Size},${Size}`
  | `${Size},${Size},${Size},${Size}`

export type LineStyle = 'none' | 'solid'

export type OverFlowValues = 'auto' | 'hidden' | 'overlay' | 'visible'
export type OverFlow =
  | OverFlowValues
  | `${'x' | 'y'}: ${OverFlowValues};`
  | `x: ${OverFlowValues}; y: ${OverFlowValues};`

export type LineWidth = Size

export type BorderStyle =
  | `${LineStyle}`
  | `${LineWidth} ${LineStyle}`
  | `${LineStyle} ${Color}`
  | `${LineWidth} ${LineStyle} ${Color}`

export interface BorderProps {
  border?: BorderStyle
  bt?: BorderStyle
  br?: BorderStyle
  bb?: BorderStyle
  bl?: BorderStyle
}
