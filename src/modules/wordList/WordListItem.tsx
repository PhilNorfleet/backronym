import styled from "styled-components"

type WordListItemProps = {
  word: string
}

const WordContainer = styled.li``;

export const WordListItem: React.FC<WordListItemProps> = ({ word }) => {
  return (
    <WordContainer>{word}</WordContainer>
  )
}
export default WordListItem