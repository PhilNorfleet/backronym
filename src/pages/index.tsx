import type { NextPage } from 'next'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import useSWR from 'swr';
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react';
import { Word } from '../common/types/Word';

const fetcher = (url: string): Promise<AxiosResponse["data"]> => axios.get(url).then(res => res.data)

const Header = styled.h1`
  color: blue;
`
const Home: NextPage = () => {
  const { register, handleSubmit } = useForm();
  const [ meansLikeWord, setMeansLikeWord ] = useState([]);
  const { data, error } = useSWR(`/api/means-like?word=${meansLikeWord}`, fetcher)
  if (error) return <>error</>
  if (!data) return <>loading</>
  return (
    <>
      <Header>Backronym Helper!</Header>
      <form onSubmit={handleSubmit((inputs) => setMeansLikeWord(inputs.meansLike))}>
        <input {...register("meansLike")} placeholder="Words with a meaning similar to"/>
      </form>
      <div>
        {data.map((word: Word) => <div>{word.word}</div>)}
      </div>
    </>
  )
}

export default Home