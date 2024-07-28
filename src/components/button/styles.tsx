import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from 'themes'

import { ButtonColor, ButtonSize, ButtonVariant } from './types'

type ButtonStyleMapItem = { button?: ViewStyle; text?: TextStyle }

type ButtonStyleMap = Record<
  ButtonVariant,
  {
    base?: ButtonStyleMapItem
    default: ButtonStyleMapItem
    pressed: ButtonStyleMapItem
    disabled: ButtonStyleMapItem
  }
>

const buttonStyleMap = (color: ButtonColor, theme: Theme): ButtonStyleMap => ({
  filled: {
    base: {
      text: {
        color: theme.colors.white,
      },
    },
    default: {
      button: {
        backgroundColor: theme.colors[color][500],
        borderColor: theme.colors[color][500],
      },
    },
    pressed: {
      button: {
        backgroundColor: theme.colors[color][700],
        borderColor: theme.colors[color][700],
      },
    },
    disabled: {
      button: {
        backgroundColor: theme.colors[color][200],
        borderColor: theme.colors[color][200],
      },
    },
  },
  accent: {
    default: {
      button: {
        backgroundColor: theme.colors[color][50],
        borderColor: theme.colors[color][50],
      },
      text: {
        color: theme.colors[color][500],
      },
    },
    pressed: {
      button: {
        backgroundColor: theme.colors[color][200],
        borderColor: theme.colors[color][200],
      },
      text: {
        color: theme.colors[color][600],
      },
    },
    disabled: {
      button: {
        backgroundColor: theme.colors[color][50],
        borderColor: theme.colors[color][50],
      },
      text: {
        color: theme.colors[color][200],
      },
    },
  },
  outlined: {
    default: {
      button: {
        borderColor: theme.colors[color][500],
      },
      text: {
        color: theme.colors[color][500],
      },
    },
    pressed: {
      button: {
        borderColor: theme.colors[color][700],
      },
      text: {
        color: theme.colors[color][700],
      },
    },
    disabled: {
      button: {
        borderColor: theme.colors[color][200],
      },
      text: {
        color: theme.colors[color][200],
      },
    },
  },
  link: {
    base: {
      button: {
        borderColor: 'transparent',
        borderRadius: 0,
      },
    },
    default: {
      text: {
        color: theme.colors[color][500],
      },
    },
    pressed: {
      text: {
        color: theme.colors[color][700],
      },
    },
    disabled: {
      text: {
        color: theme.colors[color][200],
      },
    },
  },
  plain: {
    base: {
      button: {
        borderColor: 'transparent',
        borderRadius: 0,
      },
    },
    default: {
      button: {
        borderBottomColor: theme.colors[color][500],
      },
      text: {
        color: theme.colors[color][500],
      },
    },
    pressed: {
      button: {
        borderBottomColor: theme.colors[color][700],
      },
      text: {
        color: theme.colors[color][700],
      },
    },
    disabled: {
      button: {
        borderBottomColor: theme.colors[color][200],
      },
      text: {
        color: theme.colors[color][200],
      },
    },
  },
})

export const getVariantStyleDependingOnState = ({
  theme,
  color,
  variant,
  pressed,
  disabled,
  block,
}: {
  theme: Theme
  variant: ButtonVariant
  color: ButtonColor
  size: ButtonSize
  pressed: boolean
  disabled: boolean | null | undefined
  block: boolean | null | undefined
}) => {
  const styles = buttonStyleMap(color, theme)[variant]

  let buttonStyles: ViewStyle | undefined = styles.default.button
  let textStyles: TextStyle | undefined = styles.default.text

  if (disabled) {
    buttonStyles = styles.disabled.button
    textStyles = styles.disabled.text
  }

  if (pressed) {
    buttonStyles = styles.pressed.button
    textStyles = styles.pressed.text
  }

  buttonStyles = buttonStyles || {}
  textStyles = textStyles || {}

  buttonStyles = {
    ...buttonStyles,
    ...(styles.base?.button || {}),
  }

  textStyles = {
    ...textStyles,
    ...(styles.base?.text || {}),
  }

  if (block) {
    buttonStyles.width = '100%'
  }

  return {
    buttonStyles,
    textStyles,
  }
}

export const makeButtonStyles = () =>
  StyleSheet.create({
    base: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: 8,
    },
    xs: {
      padding: 8,
      gap: 6,
    },
    sm: {
      padding: 10,
      gap: 6,
    },
    md: {
      paddingVertical: 10,
      paddingHorizontal: 12,
      gap: 8,
    },
    lg: {
      padding: 12,
      gap: 8,
    },
    xl: {
      paddingVertical: 14,
      paddingHorizontal: 16,
      gap: 12,
    },
    xxl: {
      padding: 16,
      gap: 12,
    },
    text: {
      fontFamily: 'Helvetica',
      textAlign: 'center',
    },
  })
