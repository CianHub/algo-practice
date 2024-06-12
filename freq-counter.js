const freqCounter = (arr1, arr2) => {
  /*
          1. Understand the problem
              1.1 Check if arr2 contains each element of arr1 but squared.
              1.2. inputs = two arrays of integers
              1.3. output = true or false based on the inputs
              1.4 Yes
              1.5. arr1, arr2. Each element must be represented in both arrays.
          2. freqCounter([1, 2, 3], [4, 1, 9]) = true
             freqCounter([1, 2, 3], [1, 9]) = false
             freqCounter([1, 2, 1], [4, 4, 1]) = false
          */

  if (arr1.length !== arr2.length) return false;

  const hashMap = {};

  for (let el of arr2) hashMap[el] = 1;

  for (let el of arr1) {
    if (!hashMap[(el ** 2).toString()]) return false;

    delete hashMap[(el ** 2).toString()];
  }

  return true;
};

console.log(
  `solution = ${
    freqCounter([1, 2, 3], [4, 1, 9]) === true ? "correct" : "incorrect"
  }`
);
console.log(
  `solution = ${
    freqCounter([1, 2, 3], [1, 9]) === false ? "correct" : "incorrect"
  }`
);
console.log(
  `solution = ${
    freqCounter([1, 2, 1], [4, 4, 1]) === false ? "correct" : "incorrect"
  }`
);
console.log(
  `solution = ${
    freqCounter([1, 2, 3, 2], [9, 4, 4]) === false ? "correct" : "incorrect"
  }`
);
