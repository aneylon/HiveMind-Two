function random() {
  return Math.random();
}

function randomMax(max) {
  return Math.floor(random() * max) + 1;
}

function Roll(DiceSize) {
  console.log(randomMax(DiceSize));
}

function RollAdvantage(DiceSize) {
  let temp = [randomMax(DiceSize), randomMax(DiceSize)];
  return temp.sort((a, b) => b - a);
}

function RollDisadvantage(DiceSize) {
  let temp = [randomMax(DiceSize), randomMax(DiceSize)];
  return temp.sort((a, b) => a - b);
}

function Check(modifier) {
  if (modifier === null || modifier === undefined) modifier = 0;
  if (modifier < -3) modifier = -3;
  if (modifier > 4) modifier = 4;
  let roll = randomMax(12) + modifier;
  let result = { number: roll };
  if (roll === 1 || roll === 2) {
    return { ...result, description: "Complete Failure" };
  }
  if (roll >= 3 && roll <= 5) {
    return { ...result, description: "Failure with a plus" };
  }
  if (roll >= 6 && roll <= 8) {
    return { ...result, description: "Success with a twist" };
  }
  if (roll >= 9 && roll <= 11) {
    return { ...result, description: "Success" };
  }
  if (roll >= 12) {
    return { ...result, description: "Complete Success" };
  }
}
export { Roll, RollAdvantage, RollDisadvantage, Check };
