import { Container, ScreenWrapper } from 'components'

import { WelcomeArea } from '../components/welcome-area'

export const ExploreContainer = () => {
  return (
    <ScreenWrapper>
      <Container scrollable contentContainerStyle={{ flexGrow: 1 }}>
        <WelcomeArea />
      </Container>
    </ScreenWrapper>
  )
}
