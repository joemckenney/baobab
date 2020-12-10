export type Color = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
}

export type Size = {
  [key: number]: string
}

export type ColorTheme = {
  black: string
  white: string
  grays: Color
  primary: Color
  secondary: Color
  tertiary: Color
  quaternary: Color
}

export type Theme = {
  color: ColorTheme
  size: Size
}
