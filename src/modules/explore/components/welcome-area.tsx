import { ContentSlider, DotIndicator, IconSlider, Stack } from 'components'
import { contentSliderOptions } from 'constants/content-slider-options'
import { useWelcomeArea } from '../hooks/use-welcome-area'

export const WelcomeArea = () => {
  const {
    contentSliderRef,
    currentIndex,
    colors,
    handleIconPress,
    handleContentPress,
    onViewableItemsChanged,
    viewabilityConfig,
  } = useWelcomeArea()

  return (
    <Stack style={{ flex: 1 }}>
      <Stack justify="center" align="center" style={{ marginBottom: 20 }}>
        <IconSlider onIconPress={handleIconPress} />
      </Stack>
      <Stack justify="center" align="center" style={{ flex: 2 }}>
        <ContentSlider
          ref={contentSliderRef}
          onContentPress={handleContentPress}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
          colors={colors}
        />
      </Stack>
      <Stack justify="center" align="center" style={{ flex: 1 }}>
        <DotIndicator
          activeIndex={currentIndex}
          total={contentSliderOptions.length}
          activeColor={colors[currentIndex]}
        />
      </Stack>
    </Stack>
  )
}
