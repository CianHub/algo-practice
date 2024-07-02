/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, 
replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1.

Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

Constraints:

1 <= n <= 231 - 1
*/

/*
1. Understand the problem
    1. Rephrase
    2. Identify inputs
    3. identify outputs
    4. Can we solve
    5. Key data
2. Explore examples
3. Break it down
4. Solve/simplify
5. Refactor
*/

function calcNext(n) {
  let sum = 0;
  for (let digit of n.toString()) sum += (+digit) ** 2;
  return sum;
}

function isHappy(n) {
  // short circuit
  if (n < 2) return true;
  let hashmap = {};
  while (n !== 1 && !hashmap[n]) {
    hashmap[n] = 1;
    n = calcNext(n);
  }
  return n === 1;
}

function isHappyFloyd(n) {
  // short circuit
  if (n < 2) return true;
  let slow = n;
  let fast = calcNext(n);
  while (fast !== 1 && slow !== fast) {
    slow = calcNext(slow);
    fast = calcNext(calcNext(fast));
  }
  return fast === 1;
}
console.log(isHappy(19)); // true
console.log(isHappyFloyd(19)); // true
/*
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
