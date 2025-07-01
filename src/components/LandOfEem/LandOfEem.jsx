import { Check, Roll, RollAdvantage, RollDisadvantage } from "./Actions";

export const LandOfEem = () => {
  return (
    <div>
      <h1>Land Of Eem</h1>
      <button onClick={() => console.log(Check())}>Click it</button>
    </div>
  );
};
