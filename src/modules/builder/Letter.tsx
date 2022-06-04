import React, { useEffect, useState } from "react";
import styled from "styled-components";
import type { Character } from "./store";
import useLettersStore from "./store";

const StyledListItem = styled.li`
  list-style-type: none;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 5rem;
  font-size: 3rem;
  padding: 1rem;
`;
type LetterProps = {
  character: Character;
  index: number;
  onFocus: (index: number) => void;
  autoFocus: boolean;
};
const Letter = ({
  character: storedCharacter,
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
        value={storedCharacter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value
            .replace(/\W|\d/g, "")
            .slice(-1)
            .toLowerCase() as Character;
          setValue(newValue);
        }}
        onFocus={() => onFocus(index)}
        autoFocus={autoFocus}
        spellCheck={false}
      />
    </StyledListItem>
  );
};
export default Letter;
