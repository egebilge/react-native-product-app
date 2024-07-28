import { Image, StyleSheet, View } from 'react-native'
import { HeaderImageAreaProps } from '../types'

export const HeaderImageArea = ({
  source,
  frameWidth,
  matchingLogo,
  ...props
}: HeaderImageAreaProps) => (
  <View style={{ position: 'relative' }}>
    <Image
      source={source}
      resizeMode="cover"
      style={[styles.image, { width: frameWidth }, props.styles]}
    />
    {matchingLogo && (
      <Image
        key={matchingLogo.id}
        source={matchingLogo.source}
        resizeMode="contain"
        style={[styles.logo, matchingLogo.position]}
      />
    )}
  </View>
)

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 355,
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
})
