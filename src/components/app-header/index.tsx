import { Profile } from 'assets/icons'
import { Button, Stack } from 'components'
import { useStyles } from 'hooks/use-styles'
import { useTranslation } from 'react-i18next'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { makeAppHeaderStyles } from './styles'
import { useState } from 'react'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREENS } from 'types'

export const AppHeader = () => {
  const { t } = useTranslation('explore')
  const { styles, theme } = useStyles(makeAppHeaderStyles)
  const insets = useSafeAreaInsets()
  const frame = useSafeAreaFrame()
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const [isSimulating, setIsSimulating] = useState(false)
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)

  const handleProfilePress = () => {
    if (isSimulating) {
      setIsDropdownVisible(!isDropdownVisible)
    }
  }

  const handleLogout = () => {
    setIsSimulating(false)
    setIsDropdownVisible(false)
    navigate(SCREENS.EXPLORE)
  }

  return (
    <Stack
      direction="horizontal"
      align="center"
      justify="space-between"
      style={{
        backgroundColor: theme.colors.white,
        paddingTop: insets.top + 16,
        paddingHorizontal: 15,
        paddingBottom: 20,
        width: frame.width,
      }}
    >
      <Image
        source={require('assets/img/daha_daha_logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Stack
        direction="horizontal"
        justify="flex-end"
        spacing={10}
        style={{ width: '50%' }}
      >
        {!isSimulating && (
          <Button
            title={t('login')}
            onPress={() => setIsSimulating(true)}
            size="sm"
            color="primary"
            variant="filled"
            style={{ borderRadius: 50 }}
            textProps={{ style: { fontWeight: '700' } }}
          />
        )}
        <TouchableOpacity
          onPress={handleProfilePress}
          style={
            isSimulating ? styles.simulatedProfileIcon : styles.profileIcon
          }
        >
          <Profile color={theme.colors.white} />
          {isSimulating && <View style={styles.simulationIndicator} />}
        </TouchableOpacity>
        {isDropdownVisible && isSimulating && (
          <View style={styles.dropdown}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigate(SCREENS.PROFILE_GROUP)}
            >
              <Text style={styles.dropdownText}>{t('language')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={handleLogout}
            >
              <Text style={styles.dropdownText}>{t('logout')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Stack>
    </Stack>
  )
}
