/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(n1, n2) {
  /*
    1 Understand the problem
        1. rephrase the problem = check if two integers contain the same combination of characters
        2. identify inputs = 2 positve integers
        3. identify output= boolean
        4. can we solve it with current data? yes
        5. key data
            1. input = 2 positive integers: n1, n2
            2. output = boolean
    2 Explore concrete examples
        sameFrequency(182,281) // true
        sameFrequency(34,14) // false
        sameFrequency(3589578, 5879385) // true
        sameFrequency(22,222) // false
    3 break down the problem
    4 solve/simplify
    5 refactor
    */
  // compare length if !== return false
  let str1 = n1.toString();
  let str2 = n2.toString();

  if (str1.length !== str2.length) return false;

  // init hashmap
  let hashmap = {};

  // add/incrmenet each element of str1 to hash map
  for (let el of str1) hashmap[el] = (hashmap[el] || 0) + 1;

  for (let el of str2) {
    // check if n2[i] is defined and above 0 and decremeent
    if (hashmap[el]) {
      hashmap[el]--;
    } else {
      // else exit with false
      return false;
    }
  }

  return true;
}

console.log(
  `Solution is ${sameFrequency(182, 281) === true ? "Correct" : "InCorrect"}`
);
console.log(
  `Solution is ${sameFrequency(34, 14) === false ? "Correct" : "InCorrect"}`
);
console.log(
  `Solution is ${
    sameFrequency(3589578, 5879385) === true ? "Correct" : "InCorrect"
  }`
);
console.log(
  `Solution is ${sameFrequency(22, 222) === false ? "Correct" : "InCorrect"}`
);
