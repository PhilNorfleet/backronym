import useFilterStore, { getURL } from "../../modules/filters/store"
import useSWRMutation from 'swr/mutation';
import fetcher from "../utils/fetcher";
import { DatamuseWord } from "../types/Word";
import { AxiosError } from "axios";

type useWordsResponse = {
  words: DatamuseWord[];
  loading: boolean;
  error: AxiosError
}
const useWords = () => {
  const url = useFilterStore(getURL);
  const { data, error } = useSWRMutation<DatamuseWord[]>(url, fetcher)
  return {
    words: data?.map((dmWord: DatamuseWord) => dmWord.word),
    loading: !error && !data,
    error
  };
}

export default useWords;