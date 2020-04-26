import 'styled-components'
import { Theme } from '../styles'

type Themes = typeof Theme

declare module 'styled-components' {
  export interface DefaultTheme extends Themes {}
}
