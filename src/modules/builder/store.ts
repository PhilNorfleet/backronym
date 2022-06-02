import create from 'zustand';
import { devtools } from 'zustand/middleware';

/*
* Types
*/
export type Letter =
  | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm'
  | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
;

type BuilderLetter = {
  letter: Letter;
  word?: string;
}

interface State {
  letters: BuilderLetter[];
  setCharacter: (character: Letter, index: number) => void;
}

/*
* Store
*/
const useStore = create<State>()(devtools(set => ({
  letters: [{ letter:'p' }],
  setCharacter: (character, index) => set(state =>  {
    const letters = [ ...state.letters ];
    letters[index] = { letter: character };
    console.log('setCharacter', character, index)
    return { letters }
  })
})));

export default useStore;

/*
* Selectors
*/
