import { useStyles } from 'hooks/use-styles'
import React from 'react'
import { ScrollView, Image, TouchableOpacity } from 'react-native'
import { makeIconSliderStyles } from './styles'
import { Stack, Typography } from 'components'
import { iconSliderOptions } from 'constants/icon-slider-options'

type IconSliderProps = {
  onIconPress: (iconId: string) => void
}

export const IconSlider = ({ onIconPress }: IconSliderProps) => {
  const { styles } = useStyles(makeIconSliderStyles)

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {iconSliderOptions.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={styles.iconContainer}
          onPress={() => onIconPress(icon.id)}
        >
          <Image source={icon.source} style={styles.icon} />
          <Typography variant="bodyXS" color="primary">
            {icon.label}
          </Typography>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
