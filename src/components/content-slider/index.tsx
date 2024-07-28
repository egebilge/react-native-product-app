import { useStyles } from 'hooks/use-styles'
import React, { forwardRef } from 'react'
import { FlatList, Text, TouchableOpacity } from 'react-native'
import { makeContentSliderStyles } from './styles'
import { ContentSliderProps } from './types'
import { HeaderImageArea } from 'modules/promo-detail/components/header-image-area'
import { companyLogoOptions } from 'constants/company-logo-options'
import { contentSliderOptions } from 'constants/content-slider-options'

export const ContentSlider = forwardRef<FlatList, ContentSliderProps>(
  (
    { onContentPress, onViewableItemsChanged, viewabilityConfig, colors },
    ref
  ) => {
    const { styles } = useStyles(makeContentSliderStyles)

    return (
      <FlatList
        ref={ref}
        horizontal
        data={contentSliderOptions}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.contentContainer}
            onPress={() => onContentPress(item.id)}
          >
            <HeaderImageArea
              source={item.source}
              frameWidth={300}
              matchingLogo={companyLogoOptions.find(
                logo => logo.id === item.id
              )}
              styles={styles.contentImage}
            />
            <Text style={styles.contentTitle}>{item.title}</Text>
            <Text style={[styles.contentSubtitle, { color: colors[index] }]}>
              {item.subtitle}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.contentListContainer}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
    )
  }
)
