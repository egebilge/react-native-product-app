import { StyleSheet } from 'react-native'
import { MakeStylesParams } from 'hooks/use-styles'

export const makeTabBarButtonStyles: ({
  theme,
}: MakeStylesParams) => Record<string, any> = () =>
  StyleSheet.create({
    customButtonContainer: {
      position: 'absolute',
      bottom: 9,
      left: '50%',
      transform: [{ translateX: -34 }],
    },
    customButton: {
      width: 69,
      height: 71,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: 'rgba(17, 24, 39, 0.25)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
    },
  })
