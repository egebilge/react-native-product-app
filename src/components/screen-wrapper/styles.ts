import { MakeStylesParams } from 'hooks/use-styles'
import { StyleSheet } from 'react-native'

export const makeScreenWrapperStyles = ({ theme }: MakeStylesParams) =>
  StyleSheet.create({
    screenWrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  })
