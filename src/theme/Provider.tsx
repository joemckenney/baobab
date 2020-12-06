import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import { Theme } from './types'

interface Props {
  children: React.ReactChild
  theme: Theme
}

export const ThemeProvider = ({ children, theme }: Props) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  )
}
