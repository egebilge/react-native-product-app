import { useStyles } from 'hooks/use-styles'
import { Image, TouchableOpacity } from 'react-native'
import { makeTabBarButtonStyles } from './styles'
import { CustomTabBarButtonProps } from './types'

export const CustomTabBarButton = ({ onPress }: CustomTabBarButtonProps) => {
  const { styles } = useStyles(makeTabBarButtonStyles)

  return (
    <TouchableOpacity onPress={onPress} style={styles.customButtonContainer}>
      <Image
        source={require('assets/img/portal.png')}
        style={styles.customButton}
      />
    </TouchableOpacity>
  )
}
