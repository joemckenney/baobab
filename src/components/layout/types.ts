import { SizeKey } from '../../theme/types'

export type FourDimensionalSizeProperty =
  | SizeKey
  | [SizeKey, SizeKey]
  | [SizeKey, SizeKey, SizeKey]
  | [SizeKey, SizeKey, SizeKey, SizeKey]
