

import styled from 'styled-components';

import type { NextPage } from 'next'
import Filters from '../modules/filters/Filters';
import { WordList } from '../modules/wordList';
import tw from 'twin.macro'

const HomeContainer = styled.div`
  ${tw`mx-auto`}
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
  grid-area: head;
`
const StyledFilters = styled(Filters)`
  grid-area: nav;
`
export const Home: NextPage = () => {
  return (
    <HomeContainer>
      <HomeLayout>
        <Header>Backronym Helper!</Header>

        <StyledFilters />
        <WordList />
      </HomeLayout>

    </HomeContainer>
  )
}

export default Home