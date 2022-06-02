import styled from "styled-components";
import useLettersStore from "./store";
import type { Letter as LetterType } from "./store";
const Letters = styled.ul``;
const Letter = styled.li``;
const Builder = () => {
  const letters = useLettersStore((state) => state.letters);
  const setCharacter = useLettersStore((state) => state.setCharacter);
  return (
    <Letters>
      {letters.map((letter, index) => (
        <Letter key={`${letter}-${index}`}>
          <input
            value={letter.letter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCharacter(e.target.value as LetterType, index)
            }
            type="text"
            pattern="[a-z]{1}"
          />
        </Letter>
      ))}
    </Letters>
  );
};

export default Builder;
