import { useEffect, useState } from "react";
import { ShuffleArray } from "../Random/RandomUtilities";

export const EemCharacter = () => {
  let [results, setResults] = useState(null);
  const modifiers = [2, 1, 0, -1];
  useEffect(() => {
    generateCharacter();
  }, []);
  const generateCharacter = () => {
    let shuffledModifiers = ShuffleArray(modifiers);
    let attributes = {
      Vim: shuffledModifiers[0],
      Vigor: shuffledModifiers[1],
      Knack: shuffledModifiers[2],
      Knowhow: shuffledModifiers[3],
    };
    setResults(attributes);
  };
  return (
    <div>
      <h1>Character</h1>
      <button onClick={() => generateCharacter()}>
        Generate new character
      </button>
      {results !== null && (
        <div>
          <p>Vim: {results["Vim"]}</p>
          <p>Vigor: {results["Vigor"]}</p>
          <p>Knack: {results["Knack"]}</p>
          <p>Knowhow: {results["Knowhow"]}</p>
        </div>
      )}
    </div>
  );
};
