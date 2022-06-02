

import styled from 'styled-components';

import type { NextPage } from 'next'
import Filters from '../modules/filters/Filters';
import { WordList } from '../modules/wordList';
import Builder from '../modules/builder/Builder';

const HomeContainer = styled.div`
  height: 100vh;
`;

const HomeLayout = styled.div`
  display: grid;
  grid-template-areas:
      "head head head"
      "nav main main"
      "nav main main";
`
const Head = styled.div`
  grid-area: head;
`
const Nav = styled.div`
  grid-area: nav;
`
const Main = styled.div`
  grid-area: main;
`
const HeaderText = styled.h1``;
export const Home: NextPage = () => {
  return (
    <HomeContainer>
      <HomeLayout>
        <Head><HeaderText>Backronyms</HeaderText></Head>
        <Nav>
          <Filters />
          <WordList />
        </Nav>
        <Main>
          <Builder />
        </Main>
      </HomeLayout>

    </HomeContainer>
  )
}

export default Home