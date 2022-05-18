import axios from 'axios';
import React, { useState } from 'react';
import { DatamuseWord } from '../../common/types/Word';
import fetcher from "../../common/utils/fetcher";
import { WordList } from '../wordList';

export const SeedWords: React.FC = () => {
  const [ seedWord, setSeedWord ] = useState("");
  const [ wordList, setWordList ] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    axios.get(`/api/means-like?word=${seedWord}`)
      .then(res => setWordList(res.data))
    e.preventDefault();
  }
  
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input value={seedWord} onChange={(event) => setSeedWord(event.target.value)} placeholder="Words that mean like..." />
      </form>
      <WordList words={ wordList.map((datamuseWord: DatamuseWord) => datamuseWord.word) } />
    </>
  )
}

export default SeedWords