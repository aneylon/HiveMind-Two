import { useEffect } from "react";
import { ShuffleArray } from "../Random/RandomUtilities";

export const EemCharacter = () => {
  const modifiers = [2, 1, 0, -1];
  useEffect(() => {
    generateCharacter();
  }, []);
  const generateCharacter = () => {
    console.log("Make a character.");
    // shuffle modifiers
    let shuffledModifiers = ShuffleArray(modifiers);
    console.log(shuffledModifiers);
  };
  return (
    <div>
      <h1>Character</h1>
      <button onClick={() => generateCharacter()}>
        Generate new character
      </button>
    </div>
  );
};
