/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?
*/

function isPalindromeNumberStr(x) {
  let strX = String(x);

  if (strX.length === 1) return strX[0] >= 0 ? true : false;

  let start = 0;
  let end = strX.length - 1;

  while (start < end) {
    if (strX[start] !== strX[end]) return false;
    start++;
    end--;
  }

  return true;
}

function isPalindromeNumberNoStr(x) {
  let num = x >> 0;
  let arr = [];

  while (num != 0) {
    lastDigit = num % 10;

    if (lastDigit < 0 && arr.length > 0) lastDigit = lastDigit * -1;

    arr.push(lastDigit);
    num = (num / 10) >> 0;
  }

  if (arr.length === 1) return arr[0] > 0 ? true : false;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] !== arr[end]) return false;
    start++;
    end--;
  }

  return true;
}

console.log(isPalindromeNumberStr(121)); // true
console.log(isPalindromeNumberStr(-121)); //false
console.log(isPalindromeNumberStr(10)); //false;
