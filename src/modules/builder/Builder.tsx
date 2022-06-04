import { useState } from "react";
import styled from "styled-components";
import Letter from "./Letter";
import useLettersStore from "./store";
const Letters = styled.ul``;
const Builder = () => {
  const [focus, setFocus] = useState(-1);
  const letters = useLettersStore((state) => state.letters);
  return (
    <Letters>
      {letters.map((letter, index) => (
        <Letter
          key={`${letter}-${index}`}
          character={letter.character}
          index={index}
          onFocus={() => setFocus(index)}
          autoFocus={focus === index}
        />
      ))}
    </Letters>
  );
};

export default Builder;
