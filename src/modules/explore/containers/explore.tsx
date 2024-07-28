import { Container, ScreenWrapper } from 'components'

import { WelcomeArea } from '../components/welcome-area'

export const ExploreContainer = () => {
  return (
    <ScreenWrapper>
      <Container scrollable contentContainerStyle={{ flexGrow: 1, gap: 24 }}>
        <WelcomeArea />
      </Container>
    </ScreenWrapper>
  )
}
