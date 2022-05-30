import styled from "styled-components";
import useWords from "../../common/hooks/useWords";
import WordListItem from "./WordListItem"

type WordListProps = {}

const List = styled.div`
  display: flex;
`;

export const WordList: React.FC<WordListProps> = () => {
  const { words } = useWords();
  return (
    <div>{words?.map((word: string) => <WordListItem key={word} word={word} />)}</div>
  )
}
export default WordList