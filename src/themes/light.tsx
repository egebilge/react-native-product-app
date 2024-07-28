import { colors } from './colors'
import { CommonTheme } from './common'
import { Theme } from './types'

export const LightTheme: Theme = {
  colors: {
    ...CommonTheme.colors,
    background: colors.white,
    primaryText: colors.neutral[900],
    secondaryText: colors.neutral[500],
    overlay: 'rgba(255, 255, 255, 0.8)',
  },
  typography: CommonTheme.typography,
}
