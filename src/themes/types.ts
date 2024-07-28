import { TextStyle } from 'react-native'

import { colors } from './colors'

export type ThemeVariant = 'light' | 'dark'

export type Theme = {
  colors: CommonThemeType['colors'] & {
    background: string
    primaryText: string
    secondaryText: string
    overlay: string
  }
  typography: CommonThemeType['typography']
}

export type CommonThemeType = {
  colors: typeof colors
  typography: {
    h1: TextStyle
    h2: TextStyle
    h3: TextStyle
    bodyLG: TextStyle
    bodyMD: TextStyle
    bodySM: TextStyle
    bodyXS: TextStyle
    bodyXXS: TextStyle
  }
}
