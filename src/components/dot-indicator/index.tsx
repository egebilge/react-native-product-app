import { useStyles } from 'hooks/use-styles'
import React, { useEffect, useRef } from 'react'
import { View, Animated } from 'react-native'
import { makeDotIndicatorStyles } from './styles'
import { DotIndicatorProps } from './types'

export const DotIndicator = ({
  total,
  activeIndex,
  activeColor,
}: DotIndicatorProps) => {
  const { styles } = useStyles(makeDotIndicatorStyles)
  const dotAnimations = useRef(
    Array(total)
      .fill(null)
      .map(() => new Animated.Value(0))
  ).current

  useEffect(() => {
    Animated.sequence([
      Animated.timing(dotAnimations[activeIndex], {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }),
      Animated.timing(dotAnimations[activeIndex], {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start()
  }, [activeIndex])

  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => {
        const width = dotAnimations[index].interpolate({
          inputRange: [0, 1],
          outputRange: [10, 30],
        })

        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              { width },
              activeIndex === index
                ? { backgroundColor: activeColor }
                : styles.inactiveDot,
            ]}
          />
        )
      })}
    </View>
  )
}
