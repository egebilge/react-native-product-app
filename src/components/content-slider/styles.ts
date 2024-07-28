import { MakeStylesParams } from 'hooks/use-styles'
import { StyleSheet } from 'react-native'

export const makeContentSliderStyles = ({ theme }: MakeStylesParams) =>
  StyleSheet.create({
    contentListContainer: {
      paddingHorizontal: 21,
    },
    contentContainer: {
      width: 305,
      height: 383,
      borderWidth: 1,
      borderColor: theme.colors.neutral[200],
      borderRadius: 8,
      paddingTop: 5,
      paddingBottom: 20,
      marginRight: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 1000,
      backgroundColor: theme.colors.white,
    },
    contentImage: {
      width: 295,
      height: 247,
      marginBottom: 10,
    },
    contentTitle: {
      fontSize: 14,
      fontWeight: '700',
      marginBottom: 10,
    },
    contentSubtitle: {
      fontSize: 14,
      textAlign: 'center',
      fontWeight: '700',
    },
  })
