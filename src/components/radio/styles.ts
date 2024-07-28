import { MakeStylesParams } from 'hooks/use-styles'
import { StyleSheet } from 'react-native'

export const makeRadioItemStyles = ({
  theme,
  themeVariant,
}: MakeStylesParams) =>
  StyleSheet.create({
    textSelected: {
      color:
        themeVariant === 'dark'
          ? theme.colors.white
          : theme.colors.primary[600],
      fontFamily: 'SFProText-Medium',
    },
    container: {
      paddingBottom: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.neutral[200],
    },
    circle: {
      borderRadius: 8,
      width: 16,
      height: 16,
      borderWidth: 1,
      borderColor: theme.colors.neutral[300],
      alignItems: 'center',
      justifyContent: 'center',
    },
    circleSelected: {
      backgroundColor: theme.colors.primary[600],
      borderColor: theme.colors.primary[600],
    },
    innerCircle: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.background,
    },
    innerCircleSelected: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: theme.colors.white,
    },
  })
