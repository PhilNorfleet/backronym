
import useSWR from 'swr';
import fetcher from "../utils/fetcher";
import { DatamuseWord } from "../types/Word";

const useWords = (url: string) => {
  const { data, error } = useSWR<DatamuseWord[]>(url, fetcher)

  return {
    words: data?.map((dmWord: DatamuseWord) => dmWord.word) ?? [],
    loading: !error && !data,
    error
  };
}

export default useWords;