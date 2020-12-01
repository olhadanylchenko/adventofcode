// Advent of code 2020

// 1st
// find the two entries that sum to 2020 and then multiply those two numbers together

const count = (arr) => {
  let sum = 0;
  let secondNum = 0;

  for (let i = 0; i < arr.length; i++) {
    secondNum = 2020 - arr[i];
    if (arr.indexOf(secondNum) !== -1) {
      sum = arr[i] * secondNum;
    }
  }
  console.log(sum);
};
