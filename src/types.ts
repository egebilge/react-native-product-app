import { SvgProps } from 'react-native-svg'

export enum LANGUAGE {
  EN = 'en',
  TR = 'tr',
}

export enum SCREENS {
  PROFILE = 'Profile',
  PROMO_DETAIL = 'PromoDetail',
  FAVORITES = 'Favorites',
  APP_LANGUAGE_SETTINGS = 'AppLanguageSettings',
  PROFILE_GROUP = 'ProfileGroup',
  EXPLORE = 'Explore',
  EXPLORE_GROUP = 'ExploreGroup',
}

export type Icon = React.MemoExoticComponent<
  (props: SvgProps) => React.JSX.Element
>
