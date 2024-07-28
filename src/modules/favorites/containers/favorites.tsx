import { Favorite } from 'assets/icons'
import { Button, Container, ScreenWrapper, Stack } from 'components'
import { useStyles } from 'hooks/use-styles'
import { useTranslation } from 'react-i18next'

export const FavoritesContainer = () => {
  const { theme } = useStyles()
  const { t } = useTranslation('favorites')

  return (
    <ScreenWrapper>
      <Container>
        <Stack align="center" justify="center" style={{ marginVertical: 20 }}>
          <Button
            iconLeft={
              <Favorite
                width={20}
                height={20}
                color={theme.colors.primary[500]}
              />
            }
            title={t('add_to_favorites')}
            variant="link"
            color="neutral"
          />
        </Stack>
      </Container>
    </ScreenWrapper>
  )
}
