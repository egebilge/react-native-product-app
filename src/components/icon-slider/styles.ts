import { MakeStylesParams } from 'hooks/use-styles'
import { StyleSheet } from 'react-native'

export const makeIconSliderStyles = ({ theme }: MakeStylesParams) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      zIndex: 1000,
      backgroundColor: theme.colors.white,
      maxHeight: 36,
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1.5,
      borderColor: theme.colors.neutral[200],
      borderRadius: 8,
      padding: 6,
      marginRight: 5,
      width: 'auto',
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 8,
    },
  })
