type WordListItemProps = {
  word: string
}

export const WordListItem: React.FC<WordListItemProps> = ({ word }) => {
  return (
    <>{word}</>
  )
}
export default WordListItem