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
  100: string
  200: string
  300: string
}

export interface Grays {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
}

export interface Whites {
  100: string
  200: string
}

export interface Semantic {
  success: string
  error: string
  warning: string
}

export const brand: Brand = {
  amethyst: '#9b5de5',
  'magenta-crayola': '#f15bb5',
  'minion-yellow': '#fee440',
  capri: '#00bbf9',
  'sea-green-crayola': '#00f5d4',
}

export const semantic: Semantic = {
  success: '#88c459',
  error: '#f5414f',
  warning: '#ffd137',
}

export const layout: Layout = {
  grays: {
    100: '#f4f8fd',
    200: '#e5ecf3',
    300: '#cfd9e3',
    400: '#a0acb8',
    500: '#6c7680',
    600: '#444d56',
    700: '#24292e',
  },
  blacks: { 100: '#232B2B', 200: '#0e1111', 300: '#000000' },
  whites: { 100: '#FFFFFF', 200: '#F5F5F5' },
}

export const color: Colors = {
  brand,
  semantic,
  layout,
}

export const flattendColor = {
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

export type Color = keyof typeof flattendColor
