import React from 'react'
import { PressableProps, StyleProp, TextProps, ViewStyle } from 'react-native'

export type ButtonVariant = 'filled' | 'accent' | 'outlined' | 'link' | 'plain'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | 'warning'
  | 'success'
  | 'error'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface ButtonProps extends PressableProps {
  title?: string
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  textProps?: TextProps
  block?: boolean
  href?: string
  style?: StyleProp<ViewStyle>
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}
