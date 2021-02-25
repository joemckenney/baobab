export interface Colors {
  brand: Brand
  semantic: Semantic
  layout: Layout
}

export interface Brand {
  amethyst: string
  'magenta-crayola': string
  'minion-yellow': string
  capri: string
  'sea-green-crayola': string
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
  'brand.amethyst': '#9b5de5',
  'brand.magenta-crayola': '#f15bb5',
  'brand.minion-yellow': '#fee440',
  'brand.capri': '#00bbf9',
  'brand.sea-green-crayola': '#00f5d4',
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
  | 'brand.amethyst'
  | 'brand.magenta-crayola'
  | 'brand.minion-yellow'
  | 'brand.capri'
  | 'brand.sea-green-crayola'
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
