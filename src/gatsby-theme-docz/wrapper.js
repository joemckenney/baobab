import theme from '../../../src/styles/themes/fruity/'
import { ThemeProvider } from '../../../src/theme/'

const Wrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Wrapper
