import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from 'components'
import { ExploreContainer } from 'modules/explore'
import { FavoritesContainer } from 'modules/favorites'
import { SCREENS } from 'types'

const Tab = createBottomTabNavigator()

export const ExploreGroup = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={SCREENS.EXPLORE}
        component={ExploreContainer}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={SCREENS.FAVORITES}
        component={FavoritesContainer}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
