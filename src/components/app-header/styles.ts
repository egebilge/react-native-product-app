import { MakeStylesParams } from 'hooks/use-styles'
import { StyleSheet } from 'react-native'

export const makeAppHeaderStyles = ({ theme }: MakeStylesParams) =>
  StyleSheet.create({
    image: {
      width: 81,
      height: 40,
    },
    profileIcon: {
      padding: 10,
      backgroundColor: theme.colors.black,
      borderRadius: 50,
      position: 'relative',
    },
    simulatedProfileIcon: {
      padding: 10,
      backgroundColor: theme.colors.primary[400],
      borderRadius: 50,
      position: 'relative',
    },
    simulationIndicator: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 12,
      height: 12,
      backgroundColor: theme.colors.success[600],
      borderRadius: 5,
      borderWidth: 2,
      borderColor: theme.colors.white,
    },
    dropdown: {
      position: 'absolute',
      top: 50,
      right: 0,
      backgroundColor: theme.colors.white,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 5,
      zIndex: 1,
    },
    dropdownItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.neutral[300],
    },
    dropdownText: {
      color: theme.colors.black,
    },
  })
