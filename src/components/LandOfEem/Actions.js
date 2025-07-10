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
  if (modifier === null || modifier === undefined || isNaN(modifier))
    modifier = 0;
  if (modifier < -3) modifier = -3;
  if (modifier > 4) modifier = 4;
  let roll = randomMax(12);
  let total = roll + modifier;
  let result = { number: total, modifier, breakOut: `${roll} + ${modifier}` };
  if (total === 1 || total === 2) {
    return { ...result, description: "Complete Failure" };
  }
  if (total >= 3 && total <= 5) {
    return { ...result, description: "Failure with a plus" };
  }
  if (total >= 6 && total <= 8) {
    return { ...result, description: "Success with a twist" };
  }
  if (total >= 9 && total <= 11) {
    return { ...result, description: "Success" };
  }
  if (total >= 12) {
    return { ...result, description: "Complete Success" };
  }
}
export { Roll, RollAdvantage, RollDisadvantage, Check };
