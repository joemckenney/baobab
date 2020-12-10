/// <reference types="next">
/// <reference types="next/types/global">

import type { Theme } from './src/theme/types'

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

