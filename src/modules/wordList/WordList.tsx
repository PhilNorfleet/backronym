import styled from "styled-components";
import useWords from "../../common/hooks/useWords";
import useFilterStore, { getURL } from "../../modules/filters/store"
import WordListItem from "./WordListItem"

type WordListProps = {}

const List = styled.div`
  display: flex;
`;

export const WordList: React.FC<WordListProps> = () => {
  const url = useFilterStore(getURL);
  const { words } = useWords(url);
  return (
    <ul>{words?.map((word: string) => <WordListItem key={word} word={word} />)}</ul>
  )
}
export default WordList