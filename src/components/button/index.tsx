import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Typography, TypographyVariant } from 'components'
import { useStyles } from 'hooks/use-styles'
import { Pressable } from 'react-native'

import { getVariantStyleDependingOnState, makeButtonStyles } from './styles'
import { ButtonProps, ButtonSize } from './types'

const typographyVariantMap: Record<ButtonSize, TypographyVariant> = {
  xs: 'bodyXS',
  sm: 'bodyXS',
  md: 'bodySM',
  lg: 'bodyMD',
  xl: 'bodyMD',
  xxl: 'bodyMD',
}

export const Button = ({
  variant = 'filled',
  color = 'primary',
  size = 'md',
  title,
  disabled,
  textProps,
  block,
  href,
  style,
  iconLeft,
  iconRight,
  onPress,
  ...rest
}: ButtonProps) => {
  const { theme, styles } = useStyles(makeButtonStyles)
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()

  const handleOnPress: ButtonProps['onPress'] = e => {
    if (href) {
      navigate(href)
      return
    }

    if (onPress) {
      onPress(e)
    }
  }

  return (
    <Pressable
      {...rest}
      disabled={disabled}
      onPress={handleOnPress}
      style={({ pressed }) => [
        styles.base,
        styles[size],
        getVariantStyleDependingOnState({
          theme,
          variant,
          pressed,
          disabled,
          color,
          size,
          block,
        }).buttonStyles,
        style,
      ]}
    >
      {({ pressed }) => (
        <>
          {iconLeft}

          {title ? (
            <Typography
              {...textProps}
              fontWeight="regular"
              variant={typographyVariantMap[size]}
              style={[
                styles.text,
                getVariantStyleDependingOnState({
                  theme,
                  variant,
                  pressed,
                  disabled,
                  color,
                  size,
                  block,
                }).textStyles,
                textProps?.style,
              ]}
            >
              {title}
            </Typography>
          ) : null}

          {iconRight}
        </>
      )}
    </Pressable>
  )
}
