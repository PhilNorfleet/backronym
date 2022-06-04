import React, { useEffect, useState } from "react";
import styled from "styled-components";
import type { Character } from "./types";
import useLettersStore from "./store";

const StyledListItem = styled.li`
  list-style-type: none;
`;
const StyledInput = styled.input<{ wordLength: number }>`
  border: none;
  background: repeating-linear-gradient(90deg,
    dimgrey 0, dimgrey 1ch,
    transparent 0, transparent .5ch)
    0 100%/ #{${(props) => props.wordLength * 2.5}ch}
  outline: none;
  width: 3ch;
  padding: 0 1ch;
  text-transform: capitalize;
  font: 5ch courier new, monospace;

`;
type LetterProps = {
  character: Character;
  word?: string;
  index: number;
  onFocus: (index: number) => void;
  autoFocus: boolean;
};
const Letter = ({
  character: storedCharacter,
  word,
  index,
  onFocus,
  autoFocus,
}: LetterProps) => {
  const [value, setValue] = useState(storedCharacter);
  const setStoredCharacter = useLettersStore((state) => state.setCharacter);
  useEffect(() => {
    setStoredCharacter(value, index);
  }, [value]);
  return (
    <StyledListItem>
      <StyledInput
        value={word}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value as Character;
          // .replace(/\W|\d/g, "")
          // .slice(-1) as Character;
          setValue(newValue);
        }}
        onFocus={() => onFocus(index)}
        autoFocus={autoFocus}
        spellCheck={false}
        wordLength={word?.length ?? 0}
      />
    </StyledListItem>
  );
};
export default Letter;
