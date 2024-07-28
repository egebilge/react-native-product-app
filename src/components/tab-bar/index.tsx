import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import {
  NavigationState,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native'
import { CustomTabBarButton, Stack, Typography } from 'components'
import { useStyles } from 'hooks/use-styles'
import { TouchableOpacity, ViewStyle } from 'react-native'
import { makeTabBarStyles } from './styles'
import { Explore, Favorite } from 'assets/icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREENS } from 'types'
import { useTranslation } from 'react-i18next'

interface TabBarProps extends BottomTabBarProps {}

type NavigationRoute = NavigationState['routes'][number]
type AdditionalProps = {
  isFocused: boolean
}

const routeIconMap = {
  explore: Explore,
  favorites: Favorite,
}

export const TabBar = ({ state, descriptors, navigation }: TabBarProps) => {
  const { styles } = useStyles(makeTabBarStyles)
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const { t } = useTranslation('explore')

  const onPress = (route: NavigationRoute, { isFocused }: AdditionalProps) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params)
    }
  }

  const onLongPress = (route: NavigationRoute) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    })
  }

  return (
    <Stack direction="horizontal" align="center" style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const Icon =
          routeIconMap[route.name.toLowerCase() as keyof typeof routeIconMap]

        if (!Icon) {
          return null
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            testID={options.tabBarTestID}
            onPress={() => onPress(route, { isFocused })}
            onLongPress={() => onLongPress(route)}
            style={styles.tabBarItem}
            key={route.key}
          >
            <Stack spacing={4} align="center" justify="center">
              <Icon
                style={[
                  styles.tabItemIcon as ViewStyle,
                  isFocused && (styles.tabItemIconFocused as ViewStyle),
                ]}
                color={
                  isFocused
                    ? styles.tabItemIconFocused?.color
                    : styles.tabItemIcon?.color
                }
              />
              <Typography
                variant="bodySM"
                center
                style={[
                  styles.tabItemText,
                  isFocused && styles.tabItemTextFocused,
                ]}
              >
                {t(String(label).toLowerCase()).toUpperCase()}
              </Typography>
            </Stack>
          </TouchableOpacity>
        )
      })}

      <CustomTabBarButton onPress={() => navigate(SCREENS.PROFILE_GROUP)} />
    </Stack>
  )
}
