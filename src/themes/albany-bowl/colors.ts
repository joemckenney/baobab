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

export const theme = {
  'brand.dark-liver': '#524948',
  'brand.cyber-grape': '#57467b',
  'brand.cadet-blue': '#7cb4b8',
  'brand.aquamarine': '#70f8ba',
  'brand.bitter-lime': '#cafe48',
  'semantic.success': '#88c459',
  'semantic.error': '#f5414f',
  'semantic.warning': '#ffd137',
  'layout.grays.100': '#f4f8fd',
  'layout.grays.200': '#e5ecf3',
  'layout.grays.300': '#cfd9e3',
  'layout.grays.400': '#a0acb8',
  'layout.grays.500': '#6c7680',
  'layout.grays.600': '#444d56',
  'layout.grays.700': '#24292e',
  'layout.blacks.100': '#232B2B',
  'layout.blacks.200': '#0e1111',
  'layout.blacks.300': '#000000',
  'layout.whites.100': '#FFFFFF',
  'layout.whites.200': '#F5F5F5',
}

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
