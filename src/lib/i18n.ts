import AsyncStorage from '@react-native-async-storage/async-storage'
import i18n from 'i18next'
import { exploreModuleTranslations } from 'modules/explore'
import { favoritesModuleTranslations } from 'modules/favorites'
import { profileModuleTranslations } from 'modules/profile'
import { promoDetailModuleTranslations } from 'modules/promo-detail'
import { navigationTranslations } from 'navigation/language'
import { initReactI18next } from 'react-i18next'
import { NativeModules, Platform } from 'react-native'
import { LANGUAGE } from 'types'

type Translation = {
  [key: string]: string | Translation
}
type ModuleTranslation = Record<Module, Translation>
type Module = 'navigation' | 'explore' | 'profile' | 'favorites' | 'promoDetail'

const modules: Record<Module, any> = {
  explore: exploreModuleTranslations,
  navigation: navigationTranslations,
  profile: profileModuleTranslations,
  favorites: favoritesModuleTranslations,
  promoDetail: promoDetailModuleTranslations,
}

const resources = Object.values(LANGUAGE).reduce(
  (acc, language) => ({
    ...acc,
    [language]: Object.entries(modules).reduce(
      (acc, [module, translations]) => ({
        ...acc,
        [module]: translations[language] || {},
      }),
      {}
    ),
  }),
  {} as Record<LANGUAGE, ModuleTranslation>
)

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier

let lng = 'en'

if (deviceLanguage) {
  let deviceLanguageArray = []

  if (deviceLanguage.includes('-')) {
    deviceLanguageArray = deviceLanguage.split('-')
  } else if (deviceLanguage.includes('_')) {
    deviceLanguageArray = deviceLanguage.split('_')
  }

  lng = deviceLanguageArray[0]
}

AsyncStorage.getItem('@appLanguage').then(storedLanguage => {
  if (storedLanguage) {
    lng = storedLanguage
  } else {
    AsyncStorage.setItem('@appLanguage', lng)
  }
  i18n.changeLanguage(lng)
})

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
