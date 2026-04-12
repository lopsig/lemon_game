const random = (min, max) => {
  let randomNumber = Math.random();
  let number = randomNumber * (max - min);
  let numberInt = parseInt(number);
  numberInt = numberInt + min;

  return numberInt;
};
