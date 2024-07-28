import React, { useMemo } from 'react'
import { RouteProp, useRoute } from '@react-navigation/native'
import { Button, ScreenWrapper, Stack, Typography } from 'components'
import { useTranslation } from 'react-i18next'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { companyLogoOptions } from 'constants/company-logo-options'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { HeaderImageArea } from '../components/header-image-area'
import { LegalTextContainer } from './legal-text'

type RouteParams = RouteProp<{
  params: {
    contentId: string
    title: string
    description: string
    source: any
  }
}>

export const PromoDetailContainer = () => {
  const { t } = useTranslation('promoDetail')
  const { params } = useRoute<RouteParams>()
  const { contentId, title, description, source } = params

  const frame = useSafeAreaFrame()

  const matchingLogo = useMemo(() => {
    return companyLogoOptions.find(logo => logo.id === contentId)
  }, [contentId])

  if (!contentId) {
    return null
  }

  return (
    <ScreenWrapper>
      <HeaderImageArea
        source={source}
        frameWidth={frame.width}
        matchingLogo={matchingLogo}
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Typography variant="h1" style={styles.title}>
            {t('promo_detail_with_markdown')}
          </Typography>
          <LegalTextContainer />

          <Stack justify="center">
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </Stack>
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
            style={styles.gradientOverlay}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={t('join')}
              onPress={() => {}}
              size="md"
              color="primary"
              variant="filled"
              style={{ borderRadius: 50, width: '100%', height: 56 }}
              textProps={{ style: { fontWeight: '700' } }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 15,
    paddingBottom: 100,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginVertical: 15,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    justifyContent: 'flex-end',
  },
  gradientOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
  buttonContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
})

export default PromoDetailContainer
