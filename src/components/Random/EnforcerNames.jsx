import { useState } from "react";
export const EnforcerNames = () => {
  const letters = "abcdefghijklmnop";
  const numbers = "1234567890";
  const maxNumber = 40; // TODO : error message?
  const [numberOfNames, setNumberOfNames] = useState(0);
  const [names, setNames] = useState([]);
  function random(type, min, max) {
    let index = Math.floor(Math.random() * max);
    let value = type[index];
    return value;
  }
  function makeNames() {
    setNames([]);
    if (
      numberOfNames <= maxNumber &&
      numberOfNames !== null &&
      numberOfNames !== 0
    ) {
      let newNames = [];
      for (var i = 0; i < numberOfNames; i++) {
        let newName = `${random(
          letters,
          0,
          letters.length
        ).toUpperCase()}-${random(numbers, 0, numbers.length)}${random(
          numbers,
          0,
          numbers.length
        )}${random(numbers, 0, numbers.length)}`;
        newNames.push(newName);
      }
      setNames(newNames);
    } else {
      setNames(["Please enter a valid number 40 or less."]);
    }
  }
  return (
    <>
      <h1>Enforcer names</h1>
      <input
        name="number"
        id="number"
        type="number"
        placeholder="enter a number"
        value={numberOfNames}
        onChange={(e) => {
          setNumberOfNames(+e.target.value);
        }}
      />
      <button onClick={makeNames}>Generate</button>
      <ul>
        {names.map((name, i) => {
          return <li key={i}>{name}</li>;
        })}
      </ul>
    </>
  );
};
