export const random = (max) => {
  return Math.floor(Math.random() * max);
};

export const ShuffleArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    let randomNumber = random(array.length);
    let randomItem = array[randomNumber];
    let temp = array[i];
    array[i] = randomItem;
    array[randomNumber] = temp;
  }
  return array;
};
