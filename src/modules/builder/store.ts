import create from "zustand";
import { devtools } from "zustand/middleware";

/*
 * Types
 */
export type Character =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "";

export type BuilderLetter = {
  character: Character;
  word?: string;
};

interface State {
  letters: BuilderLetter[];
  setCharacter: (character: Character, index: number) => void;
  setLetters: (word: string) => void;
}

/*
 * Store
 */
const useStore = create<State>()(
  devtools((set) => ({
    letters: [{ character: "p" }],
    setCharacter: (character, index) =>
      set((state) => {
        const letters = [...state.letters];
        letters[index] = { character };
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
