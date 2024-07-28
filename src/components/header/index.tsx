import { DrawerNavigationProp } from '@react-navigation/drawer'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'assets/icons'
import { Stack } from 'components/stack'
import { Typography } from 'components/typography'
import { useThemeContext } from 'contexts/theme-context'
import { Platform, TouchableOpacity, View } from 'react-native'
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'
import { HeaderProps } from './types'
import { SCREENS } from 'types'

export const Header = ({
  title = '',
  variant = 'back',
  screenName,
}: HeaderProps) => {
  const insets = useSafeAreaInsets()
  const frame = useSafeAreaFrame()
  const { goBack } = useNavigation<DrawerNavigationProp<ParamListBase>>()

  const { theme, themeVariant } = useThemeContext()

  const textColor =
    themeVariant === 'dark' ? theme.colors.neutral[100] : theme.colors.white

  const isProfileOrPromoScreen =
    screenName === SCREENS.PROFILE_GROUP || screenName === SCREENS.PROMO_DETAIL

  const paddingTop = Platform.select({
    ios: isProfileOrPromoScreen ? insets.top : 0,
    android: isProfileOrPromoScreen ? insets.top + 16 : 0,
  })

  return (
    <Stack
      direction="horizontal"
      align="center"
      justify="space-between"
      style={{
        backgroundColor:
          screenName === SCREENS.PROFILE_GROUP
            ? theme.colors.white
            : 'transparent',
        paddingTop,
        paddingHorizontal: 15,
        paddingBottom: screenName === SCREENS.PROFILE_GROUP ? 16 : 0,
        width: frame.width,
        position:
          screenName === SCREENS.PROFILE_GROUP ? 'relative' : 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {variant === 'back' && (
        <TouchableOpacity
          onPress={goBack}
          style={{
            height: 40,
            width: 40,
            borderRadius: 24,
            backgroundColor: theme.colors.neutral[900],
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ArrowLeft color={textColor} />
        </TouchableOpacity>
      )}

      <Typography
        variant="bodyLG"
        fontWeight="regular"
        center
        style={{
          color:
            screenName === SCREENS.PROFILE_GROUP
              ? theme.colors.black
              : textColor,
          flex: 1,
        }}
      >
        {title}
      </Typography>

      {variant === 'back' && <View style={{ width: 24, height: 24 }} />}
    </Stack>
  )
}
