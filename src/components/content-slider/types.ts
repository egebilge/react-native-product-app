import { ViewToken } from 'react-native'

export type ContentSliderProps = {
  onContentPress: (contentId: string) => void
  onViewableItemsChanged: ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>
  }) => void
  viewabilityConfig: { viewAreaCoveragePercentThreshold: number }
  colors: string[]
}

export type ContentSliderOptionsProps = {
  id: string
  source: any
  title: string
  subtitle: string
  description: string
}
