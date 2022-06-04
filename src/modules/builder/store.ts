import create from "zustand";
import { devtools } from "zustand/middleware";
import type { BuilderLetter, Character } from "./types";

/*
 * Types
 */

interface State {
  letters: BuilderLetter[];
  setCharacter: (character: Character, index: number) => void;
  setWord: (word: string, index: number) => void;
  setLetters: (word: string) => void;
}

/*
 * Store
 */
const useStore = create<State>()(
  devtools((set) => ({
    letters: [],
    setCharacter: (character, index) =>
      set((state) => {
        const letters = [...state.letters];
        letters[index] = { character };
        return { letters };
      }),
    setWord: (word, index) =>
      set((state) => {
        const letters = [...state.letters];
        const letter = letters[index];
        letter.character = word.charAt(0) as Character;
        letter.word = word;
        letters[index] = letter;
        return { letters };
      }),
    setLetters: (word) =>
      set((state) => {
        if (!word) return state;
        const letters = word.split("").map((character) => ({
          character: character as Character,
        }));
        return { letters };
      }),
  }))
);

export default useStore;

/*
 * Selectors
 */
