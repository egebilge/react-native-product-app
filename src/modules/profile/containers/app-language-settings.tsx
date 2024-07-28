import AsyncStorage from '@react-native-async-storage/async-storage'
import { Container, ScreenWrapper, Typography } from 'components'
import { LanguageList } from 'components/language-list'
import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const AppLanguageSettingsContainer = () => {
  const { t, i18n } = useTranslation('profile')

  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const handleLanguageSelection = useCallback(
    async (val: string) => {
      setSelectedLanguage(val)
      await AsyncStorage.setItem('@appLanguage', val)
      i18n.changeLanguage(val)
    },
    [selectedLanguage]
  )

  return (
    <ScreenWrapper>
      <Container scrollable style={{ paddingTop: 24 }}>
        <Typography
          fontWeight="regular"
          variant="bodyLG"
          style={{
            marginBottom: 20,
          }}
        >
          {t('app_language_settings')}
        </Typography>

        <LanguageList
          selectedLanguage={selectedLanguage}
          onSelect={handleLanguageSelection}
        />
      </Container>
    </ScreenWrapper>
  )
}
