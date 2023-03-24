const myInput = "abcdefgh";
const mySplittedInput = myInput.split("");

const getRandomElementFromArray = (input) => {
  isArrayAnArray(input);
  isArrayNotEmpty(input);
  return input[Math.floor(Math.random() * input.length)];
};

const isArrayAnArray = (input) => {
  if (!Array.isArray(input)) {
    throw new Error("You must type an Array");
  }
};

const isArrayNotEmpty = (input) => {
  if (input.length === 0) {
    throw new Error("You must not type an empty Array");
  }
};

const result1 = getRandomElementFromArray(mySplittedInput);
console.log(result1);
