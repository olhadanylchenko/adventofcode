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

// FOURTH ADVENT
// input example: `byr:1971
//                 ecl:hzl pid:112040163
//                 eyr:2023 iyr:2019
//                 hcl:#b6652a hgt:167cm`

// 1st

{
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
  });

  rl.on("line", input);

  const passports = [];
  let passport = {};

  const passportIsValid = (passport) => {
    const passportKeys = Object.keys(passport);
    if (
      passportKeys.length === 8 ||
      (passportKeys.length === 7 && passportKeys.indexOf("cid") == -1)
    ) {
      return true;
    } else return false;
  };

  function input(line) {
    if (line === "0") {
      console.log(
        passports.filter((passport) => passportIsValid(passport)).length
      );
      process.exit();
    }
    if (line === "") {
      passports.push(passport);
      passport = {};
    } else {
      const pairs = line.split(" ");
      pairs.forEach((pair) => {
        const [key, value] = pair.split(":");
        passport[key] = value;
      });
    }
  }
}

// 2nd

{
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
  });

  const validBirthYear = (byr) => {
    return byr.length === 4 && +byr >= 1920 && +byr <= 2002;
  };
  const validIssueYear = (iyr) => {
    return iyr.length === 4 && +iyr >= 2010 && +iyr <= 2020;
  };
  const validExpirationYear = (eyr) => {
    return eyr.length === 4 && +eyr >= 2020 && +eyr <= 2030;
  };
  const validHeight = (hgt) => {
    const heightCm = +hgt.split("cm")[0];
    const heightIn = +hgt.split("in")[0];
    return (
      (hgt.includes("cm") && heightCm >= 150 && heightCm <= 193) ||
      (hgt.includes("in") && heightIn >= 59 && heightIn <= 76)
    );
  };

  const validHairColor = (hcl) => {
    const r = /^[a-z0-9]+$/;
    return hcl.slice(0, 1) === "#" && r.test(hcl.slice(1));
  };

  const validEyeColor = (ecl) => {
    const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    return eyeColors.some((color) => color === ecl);
  };

  const validPassportId = (pid) => {
    const r = /^[0-9]+$/;
    return r.test(pid) && pid.length === 9;
  };

  const passportIsValid = (passport) => {
    const passportKeys = Object.keys(passport);
    if (
      passportKeys.length === 8 ||
      (passportKeys.length === 7 && passportKeys.indexOf("cid") == -1)
    ) {
      return (
        validBirthYear(passport.byr) &&
        validIssueYear(passport.iyr) &&
        validExpirationYear(passport.eyr) &&
        validHeight(passport.hgt) &&
        validHairColor(passport.hcl) &&
        validEyeColor(passport.ecl) &&
        validPassportId(passport.pid)
      );
    } else return false;
  };

  rl.on("line", input);

  const passports = [];
  let passport = {};

  function input(line) {
    if (line === "0") {
      console.log(
        passports.filter((passport) => passportIsValid(passport)).length
      );
      process.exit();
    }
    if (line === "") {
      passports.push(passport);
      passport = {};
    } else {
      const pairs = line.split(" ");
      pairs.forEach((pair) => {
        const [key, value] = pair.split(":");
        passport[key] = value;
      });
    }
  }
}
