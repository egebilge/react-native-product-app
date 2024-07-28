import { colors } from './colors'
import { CommonTheme } from './common'
import { Theme } from './types'

export const DarkTheme: Theme = {
  colors: {
    ...CommonTheme.colors,
    background: colors.primary[800],
    primaryText: colors.neutral[300],
    secondaryText: colors.neutral[300],
    overlay: 'rgba(24, 11, 47, 0.8)',
  },
  typography: CommonTheme.typography,
}
