import styled from "styled-components";
import useBuilderStore from "../builder/store";

type WordListItemProps = {
  word: string;
};

const WordContainer = styled.li``;

export const WordListItem: React.FC<WordListItemProps> = ({ word }) => {
  const setLetters = useBuilderStore((state) => state.setLetters);
  return (
    <WordContainer>
      <span onClick={() => setLetters(word)}>{word}</span>
    </WordContainer>
  );
};
export default WordListItem;
