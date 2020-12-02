// Advent of code 2020

// 1st
// find the two entries that sum to 2020 and then multiply those two numbers together

const twoNums = (arr) => {
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

// 2nd
// find the three entries that sum to 2020 and then multiply those two numbers together

const threeNums = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let thirdNum = 2020 - arr[i] - arr[j];

      if (
        arr.indexOf(thirdNum) !== -1 &&
        arr.indexOf(thirdNum) !== arr[i] &&
        arr.indexOf(thirdNum) !== arr[j]
      ) {
        return arr[i] * arr[j] * thirdNum;
      }
    }
  }
};
