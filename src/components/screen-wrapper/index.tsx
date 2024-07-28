import { useStyles } from 'hooks/use-styles'
import { View } from 'react-native'

import { makeScreenWrapperStyles } from './styles'
import { ScreenWrapperProps } from './types'

export const ScreenWrapper = ({
  children,
  style,
  ...props
}: ScreenWrapperProps) => {
  const { styles } = useStyles(makeScreenWrapperStyles)

  return (
    <View {...props} style={[styles.screenWrapper, style]}>
      {children}
    </View>
  )
}
