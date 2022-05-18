import WordListItem from "./WordListItem"

type WordListProps = {
  words: string[] 
}

export const WordList: React.FC<WordListProps> = ({ words }) => {
  return (
    <div>{words?.map((word: string) => <WordListItem word={word} />)}</div>
  )
}
export default WordList