import LottieView from 'lottie-react-native'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const ErrorBoundaryFallbackComponent = (props: {
  error: Error
  resetError: () => void
}) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom + 32,
          paddingTop: insets.top + 32,
          paddingLeft: insets.left + 24,
          paddingRight: insets.right + 24,
        },
      ]}
    >
      <View style={styles.logoContainer}>
        <LottieView
          speed={0}
          source={require('assets/lottie/avatar.json')}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Oops...</Text>
        <Text style={styles.description}>
          It's an unexpected error and we're notified by the error. We'll fix it
          as soon as possible.
        </Text>
      </View>

      <TouchableOpacity onPress={props.resetError} style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 160,
    height: 160,
  },
  container: {
    display: 'flex',
    gap: 32,
    flex: 1,
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E35A7',
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
  btnText: {
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
  },
  logoContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
})
