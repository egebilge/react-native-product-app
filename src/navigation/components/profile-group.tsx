import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from 'components'
import { AppLanguageSettingsContainer } from 'modules/profile'
import { SCREENS } from 'types'

type ProfileStackParamList = {
  AppLanguageSettings: undefined
}

const Stack = createNativeStackNavigator<ProfileStackParamList>()

export const ProfileGroup = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <Header screenName={SCREENS.PROFILE_GROUP} title="Profile" />
        ),
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name={SCREENS.APP_LANGUAGE_SETTINGS}
          component={AppLanguageSettingsContainer}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
