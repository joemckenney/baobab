export type ColorKey = 100 | 200 | 300 | 400 | 500 | 600

export type Color = {
  [key in ColorKey]: string
}

export type SizeKey = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type Size = {
  [key in SizeKey]: string
}

export type ColorThemeKey = keyof ColorTheme

export type Theme = {
  color: ColorTheme
  size: Size
}

export interface ColorTheme {
  brand: Record<
    string,
    string | Record<ColorKey, string> | Record<string, string>
  >
  semantic: Record<
    string,
    string | Record<ColorKey, string> | Record<string, string>
  >
  layout: Record<
    string,
    string | Record<ColorKey, string> | Record<string, string>
  >
}
