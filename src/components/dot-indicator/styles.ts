import { MakeStylesParams } from 'hooks/use-styles'
import { StyleSheet } from 'react-native'

export const makeDotIndicatorStyles = ({ theme }: MakeStylesParams) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dot: {
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: theme.colors.error[400],
    },
    inactiveDot: {
      backgroundColor: theme.colors.neutral[300],
    },
  })
