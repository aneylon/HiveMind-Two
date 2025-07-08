import { Check, Roll, RollAdvantage, RollDisadvantage } from "./Actions";
import { EemCharacter } from "./EemCharacter";

export const LandOfEem = () => {
  return (
    <div>
      <h1>Land Of Eem</h1>
      <button onClick={() => console.log(Check())}>Click it</button>
      <EemCharacter />
    </div>
  );
};
