import AsyncStorage from '@react-native-async-storage/async-storage'
import { RadioGroup } from 'components/radio'
import { languages } from 'modules/profile/constants/languages'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageList = ({
  selectedLanguage,
  onSelect,
}: {
  selectedLanguage: string
  onSelect: (val: string) => void
}) => {
  const { t } = useTranslation('profile')

  useEffect(() => {
    AsyncStorage.getItem('@appLanguage').then(language => {
      if (language) {
        onSelect(language)
      }
    })
  }, [])

  return (
    <RadioGroup
      items={languages.map(item => ({
        key: item.key,
        label: t(item.languageKey),
      }))}
      value={selectedLanguage}
      onChange={onSelect}
    />
  )
}
