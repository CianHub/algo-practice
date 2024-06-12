function isHappyNumber(n) {
  /*
Write an algorithm to determine if a number n is a happy number.

We use the following process to check if a given number is a happy number:

Starting with the given number n, replace the number with the sum of the squares of its digits.

Repeat the process until:
The number equals 1, which will depict that the given number n is a happy number.
The number enters a cycle, which will depict that the given number n is not a happy number.

Return TRUE if n is a happy number, and FALSE if not.
*/
  /*
1. Understand the problem
    1. rephrase -> 
    separate each digit of n, add the squares of these digits, 
    repeat until number is 1 return true
    or identify when the number is in a cycle return false
    2. identify inputs -> n integer
    3. identify outputs -> boolean
    4. Do we have enough data to solve? yes
    5. list key data if req
2. Explore examples
    isHappyNumber(23) // true
    isHappyNumber(2) // false

3. Break it down
4. Solve/Simplify
5. Refactor
*/
  // check if n === 1 return true
  // check if n === 0 return false
  if (n === 0) return false;
  if (n === 1) return true;
  // init hashmap
  const hashmap = {};

  let num = n;
  // while (true)
  while (true) {
    // init temp = 0
    let temp = sumOfSquaredDigits(num);

    // if temp === 1 return true
    // if hashmap[temp] return false
    if (temp === 1) return true;
    if (hashmap[temp]) return false;

    hashmap[temp] = 1;
    num = temp;
  }
}

// Helper
function sumOfSquaredDigits(number) {
  let totalSum = 0;
  while (number > 0) {
    let digit = number % 10; // Extract the digit before division
    number = Math.floor(number / 10); // Update the number
    totalSum += digit ** 2;
  }
  return totalSum;
}

console.log(isHappyNumber(23)); // true
console.log(isHappyNumber(2)); // false
