import { Check, Roll, RollAdvantage, RollDisadvantage } from "./Actions";
import { EemCharacter } from "./EemCharacter";
import { RollACheck } from "./RollACheck";

export const LandOfEem = () => {
  return (
    <div>
      <h1>Land Of Eem</h1>
      <RollACheck />
      <EemCharacter />
    </div>
  );
};
