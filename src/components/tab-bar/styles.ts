import { StyleSheet } from 'react-native'
import { MakeStylesParams } from 'hooks/use-styles'

export const makeTabBarStyles: ({
  theme,
}: MakeStylesParams) => Record<string, any> = ({ theme }) =>
  StyleSheet.create({
    tabBar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 12,
      paddingBottom: 10,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: theme.colors.white,
      elevation: 5,
      shadowColor: 'rgba(17, 24, 39, 0.15)',
      shadowOffset: {
        width: 0,
        height: -8,
      },
      shadowOpacity: 1,
      shadowRadius: 28,
      position: 'relative',
    },
    tabBarItem: {
      flex: 1,
    },
    tabItemIcon: {
      color: theme.colors.bottomTabBar.inactive,
    },
    tabItemIconFocused: {
      color: theme.colors.bottomTabBar.active,
    },
    tabItemText: {
      color: theme.colors.bottomTabBar.inactive,
      ...theme.typography.bodyXXS,
      fontWeight: '700',
    },
    tabItemTextFocused: {
      color: theme.colors.bottomTabBar.active,
      ...theme.typography.bodyXXS,
      fontWeight: '700',
    },
  })
