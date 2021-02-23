export type Color =
  | 'brand.dark-liver'
  | 'brand.cyber-grape'
  | 'brand.cadet-blue'
  | 'brand.aquamarine'
  | 'brand.bitter-lime'
  | 'semantic.success'
  | 'semantic.error'
  | 'semantic.warning'
  | 'layout.grays.100'
  | 'layout.grays.200'
  | 'layout.grays.300'
  | 'layout.grays.400'
  | 'layout.grays.500'
  | 'layout.grays.600'
  | 'layout.grays.700'
  | 'layout.blacks.100'
  | 'layout.blacks.200'
  | 'layout.blacks.300'
  | 'layout.whites.100'
  | 'layout.whites.200'
export interface Colors {
  brand: Brand
  semantic: Semantic
  layout: Layout
}

export interface Brand {
  'dark-liver': string
  'cyber-grape': string
  'cadet-blue': string
  aquamarine: string
  'bitter-lime': string
}

export interface Layout {
  grays: Grays
  blacks: Blacks
  whites: Whites
}

export interface Blacks {
  '100': string
  '200': string
  '300': string
}

export interface Grays {
  '100': string
  '200': string
  '300': string
  '400': string
  '500': string
  '600': string
  '700': string
}

export interface Whites {
  '100': string
  '200': string
}

export interface Semantic {
  success: string
  error: string
  warning: string
}
