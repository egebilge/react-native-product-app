import { ParamListBase, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { contentSliderOptions } from 'constants/content-slider-options'
import { useMemo, useRef, useState } from 'react'
import { FlatList, ViewToken } from 'react-native'
import { SCREENS } from 'types'

export const useWelcomeArea = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>()
  const contentSliderRef = useRef<FlatList>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  const colors = useMemo(
    () => contentSliderOptions.map(() => getRandomColor()),
    []
  )

  const handleIconPress = (iconId: string) => {
    if (contentSliderRef.current) {
      const index = contentSliderOptions.findIndex(item => item.id === iconId)
      if (index >= 0) {
        contentSliderRef.current.scrollToIndex({ animated: true, index })
      }
    }
  }

  const handleContentPress = (contentId: string) => {
    const content = contentSliderOptions.find(item => item.id === contentId)
    if (content) {
      navigate(SCREENS.PROMO_DETAIL, {
        contentId: content.id,
        title: content.title,
        description: content.description,
        source: content.source,
      })
    }
  }

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>
  }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index || 0)
    }
  }

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50,
  }

  const data = useMemo(
    () => ({
      contentSliderRef,
      currentIndex,
      colors,
      handleIconPress,
      handleContentPress,
      onViewableItemsChanged,
      viewabilityConfig,
    }),
    [contentSliderRef, currentIndex, colors]
  )

  return data
}
