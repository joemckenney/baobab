import { SizeKey } from '../../theme/types'

import { Color } from '../../themes/high-contrast/colors'

export type FourDimensionalSizeProperty =
  | `${SizeKey}`
  | `${SizeKey},${SizeKey}`
  | `${SizeKey},${SizeKey},${SizeKey}`
  | `${SizeKey},${SizeKey},${SizeKey},${SizeKey}`

export type LineStyle = 'none' | 'solid'

export type OverFlowValues = 'auto' | 'hidden' | 'overlay' | 'visible'
export type OverFlow =
  | OverFlowValues
  | `${'x' | 'y'}: ${OverFlowValues};`
  | `x: ${OverFlowValues}; y: ${OverFlowValues};`

export type LineWidth = SizeKey

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
