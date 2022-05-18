

import styled from 'styled-components';

import type { NextPage } from 'next'
import SeedWords from '../modules/seedWords/SeedWords';

const HomeContainer = styled.div`
  height: 100vh;
`;
const HomeLayout = styled.div`
  display: grid;
  grid-template-areas:
      "head head head"
      "nav main main"
      "nav main main";
  justify-content: space-between;
`
const Header = styled.h1`
  grid-area: "head";
`
const StyledSeedWords = styled(SeedWords)`
  grid-area: "nav";
`
export const Home: NextPage = () => {

  return (
    <HomeContainer>
      <HomeLayout>
        <Header>Backronym Helper!</Header>

        <StyledSeedWords />
      </HomeLayout>

    </HomeContainer>
  )
}

export default Home