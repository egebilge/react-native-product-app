import { View } from 'react-native'

import { createStackStyles } from './styles'
import { StackProps } from './types'

export const Stack = ({
  children,
  direction = 'vertical',
  spacing = 4,
  align = 'flex-start',
  justify = 'flex-start',
  wrap = false,
  style,
  ...props
}: StackProps) => {
  const styles = createStackStyles({
    direction,
    spacing,
    align,
    justify,
    wrap,
  })

  return (
    <View {...props} style={[styles.stack, style]}>
      {children}
    </View>
  )
}
