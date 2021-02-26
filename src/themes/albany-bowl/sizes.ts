export interface Sizes {
  font: Font
  spacing: Spacing
}

export interface Font {
  small: string
  medium: string
  large: string
}

export interface Spacing {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
}

export const font: Font = { small: '12px', medium: '14px', large: '16px' }

export const spacing: Spacing = {
  0: '1px',
  1: '2px',
  2: '4px',
  3: '8px',
  4: '16px',
  5: '32px',
  6: '64px',
}

export const size: Sizes = {
  font,
  spacing,
}

export const flattenedSize = {
  'font.small': '12px',
  'font.medium': '14px',
  'font.large': '16px',
  'spacing.0': '1px',
  'spacing.1': '2px',
  'spacing.2': '4px',
  'spacing.3': '8px',
  'spacing.4': '16px',
  'spacing.5': '32px',
  'spacing.6': '64px',
}

export type Size = keyof typeof flattenedSize
