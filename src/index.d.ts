import type { Theme } from './theme/types'

import 'styled-components'

declare module 'styled-components' {
  //eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}

