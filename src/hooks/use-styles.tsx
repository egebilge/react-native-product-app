import { useThemeContext } from 'contexts/theme-context'
import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { Theme } from 'themes'

type MakeStyles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
> = (params: MakeStylesParams) => T | StyleSheet.NamedStyles<T>

export type MakeStylesParams = {
  theme: Theme
  themeVariant: 'dark' | 'light'
}

export function useStyles<T extends StyleSheet.NamedStyles<T>>(
  makeStylesFn?: MakeStyles<T>
) {
  const { theme, themeVariant } = useThemeContext()

  const memoizedStylesheet = useMemo(() => {
    let styleSheetProps = {}

    if (typeof makeStylesFn !== 'undefined') {
      const providedStyles = makeStylesFn({ theme, themeVariant })

      styleSheetProps = {
        ...providedStyles,
      }
    }

    const styles = StyleSheet.flatten(styleSheetProps) as T

    return {
      styles,
      theme,
      themeVariant,
    }
  }, [themeVariant])

  return memoizedStylesheet
}
