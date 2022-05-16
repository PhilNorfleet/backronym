import type { NextPage } from 'next'
import styled from 'styled-components';
import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios'

const fetcher = (url: string): Promise<AxiosResponse["data"]> => axios.get(url).then(res => res.data)

const Header = styled.h1`
  color: blue;
`
const Home: NextPage = () => {
  const { data, error } = useSWR('/api/means-like?word=muffin', fetcher)
  if (error) return <>error</>
  if (!data) return <>loading</>
  return (
    <>
      <Header>Backronym Helper!</Header>
      {data.map((word: string) => `${word.word}`)}
    </>
  )
}

export default Home
