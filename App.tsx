import './src/lib/i18n'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'contexts/theme-context'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import ErrorBoundary from 'react-native-error-boundary'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import { ErrorBoundaryFallbackComponent } from 'components'
import { Navigation } from 'navigation'

function App() {
  const { i18n } = useTranslation()

  const errorHandler = (error: Error, stackTrace: string) => {
    /* Log the error to an error reporting service */
    console.error(error, stackTrace)
  }

  useEffect(() => {
    AsyncStorage.getItem('@appLanguage').then(language => {
      if (language) {
        i18n.changeLanguage(language)
      }
    })

    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }, [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <ErrorBoundary
            onError={errorHandler}
            FallbackComponent={ErrorBoundaryFallbackComponent}
          >
            <NavigationContainer>
              <Navigation />
            </NavigationContainer>
          </ErrorBoundary>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}

export default App
