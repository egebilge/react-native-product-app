import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, useContext, useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { CommonTheme, DarkTheme, LightTheme, Theme } from 'themes'

type ThemeVariant = 'dark' | 'light'

type ThemeContextType = {
  theme: Theme
  themeVariant: ThemeVariant
  toggleThemeVariant: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)
const { Provider } = ThemeContext

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useColorScheme() === 'dark'

  const [themeVariant, setThemeVariant] = useState<ThemeVariant>(
    isDarkMode ? 'dark' : 'light'
  )

  const toggleThemeVariant = () => {
    const newVal = themeVariant === 'dark' ? 'light' : 'dark'
    setThemeVariant(newVal)
    AsyncStorage.setItem('themeVariant', newVal)
  }

  useEffect(() => {
    AsyncStorage.getItem('themeVariant').then(value => {
      if (value) {
        setThemeVariant(value as ThemeVariant)
      }

      setThemeVariant('light')
    })
  }, [])

  return (
    <Provider
      value={{
        themeVariant,
        toggleThemeVariant,
        theme:
          themeVariant === 'dark'
            ? { ...CommonTheme, ...DarkTheme }
            : { ...CommonTheme, ...LightTheme },
      }}
    >
      {children}
    </Provider>
  )
}

const useThemeContext = () => {
  const context = useContext(ThemeContext) as ThemeContextType

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

export { ThemeProvider, useThemeContext }
