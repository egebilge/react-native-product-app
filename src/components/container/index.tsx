import { View, ViewProps } from 'react-native'
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view'
interface NotScrollableContainerProps extends ViewProps {
  scrollable?: false
}

interface ScrollableContainerProps extends KeyboardAwareScrollViewProps {
  scrollable?: true
}

type ContainerProps = NotScrollableContainerProps | ScrollableContainerProps

export const Container = ({
  children,
  style,
  scrollable = false,
  ...rest
}: ContainerProps) => {
  const Component = scrollable ? KeyboardAwareScrollView : View

  return (
    <Component {...rest} style={[{ paddingHorizontal: 15 }, style]}>
      {children}
    </Component>
  )
}
