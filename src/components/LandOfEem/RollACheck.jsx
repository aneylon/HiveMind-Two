import { useState } from "react";
import { Check } from "./Actions";

export const RollACheck = () => {
  const [rollResult, setRollResult] = useState({
    number: 0,
    description: "Roll a check!",
  });
  const check = (data) => {
    let modifier = parseInt(data.get("modifier"));

    if (isNaN(modifier)) {
      modifier = 0;
    }
    let result = Check(modifier);
    setRollResult(result);
  };
  return (
    <div>
      <h1>Roll A Check</h1>
      <form action={check}>
        <input
          id="modifier"
          name="modifier"
          type="number"
          placeholder="check modifier (-3 ~ +4)"
        />
        <button type="submit">Roll</button>
      </form>
      <div>
        <span>{rollResult.description} : </span>
        {rollResult.number !== 0 && (
          <>
            <span>{rollResult.number}</span>{" "}
            {rollResult.modifier !== 0 && <span>({rollResult.breakOut})</span>}
          </>
        )}
      </div>
    </div>
  );
};
