import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ExploreGroup } from './components/explore-group'
import { AppHeader, Header } from 'components'
import { PromoDetailContainer } from 'modules/promo-detail'
import { ProfileGroup } from './components/profile-group'
import { SCREENS } from 'types'

type NavigationParamsList = {
  ExploreGroup: undefined
  PromoDetail: {
    contentId: string
    title: string
    subtitle: string
    description: string
    source: any
  }
  ProfileGroup: undefined
}

const Stack = createNativeStackNavigator<NavigationParamsList>()

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        orientation: 'portrait_up',
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name={SCREENS.EXPLORE_GROUP}
          component={ExploreGroup}
          options={{
            header: () => <AppHeader />,
          }}
        />
        <Stack.Screen
          name={SCREENS.PROMO_DETAIL}
          component={PromoDetailContainer}
          options={{
            header: () => <Header screenName={SCREENS.PROMO_DETAIL} />,
          }}
        />

        <Stack.Screen
          name={SCREENS.PROFILE_GROUP}
          component={ProfileGroup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
