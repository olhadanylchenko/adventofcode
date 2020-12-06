// Advent of code 2020

// FIRST ADVENT
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

// SECOND ADVENT
// input example: `5-6 s: zssmssbsms`
// 1st

const passwordsOne = (input) => {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const [min, max] = input[i]
      .split(/-| /)
      .splice(0, 2)
      .map((el) => parseInt(el));
    // alternative way to turn string to a number
    // .map((el) => +el);

    const password = input[i].split(":")[1].trim();
    const letter = input[i].split(/:| /)[1];
    const nonMatchingLetters = password
      .split(letter)
      .filter((num) => num !== "")
      .join("").length;
    const numOfLetters = password.length - nonMatchingLetters;
    if (numOfLetters >= min && numOfLetters <= max) {
      count++;
    }
  }
  return count;
};

// 2nd

const passwordsTwo = (input) => {
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const nums = input[i]
      .split(/-| /)
      .splice(0, 2)
      .map((el) => parseInt(el));
    const indexOne = nums[0] - 1;
    const indexTwo = nums[1] - 1;
    const password = input[i].split(":")[1].trim();
    const letter = input[i].split(/:| /)[1];
    if (
      (password[indexOne] === letter && password[indexTwo] !== letter) ||
      (password[indexTwo] === letter && password[indexOne] !== letter)
    ) {
      count++;
    }
  }
  return count;
};

// THIRD ADVENT
//input example: `.#......##..#.....#....#.#.#...`
// 1st

const tobogganTrajectory = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i].length);
    if (arr[i][(i * 3) % 31] === "#") {
      count++;
    }
  }
  return count;
};

// 2nd

const tobogganTrajectoryTwo = (arr) => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];

  const treesOnSlopes = slopes.map((slope) => {
    const [right, down] = slope;
    let count = 0;

    for (let i = down; i < arr.length; i += down) {
      if (arr[i][((i / down) * right) % 31] === "#") {
        count++;
      }
    }
    return count;
  });
  return treesOnSlopes.reduce((acc, curval) => acc * curval);
};
