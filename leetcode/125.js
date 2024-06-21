/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, 
it reads the same forward and backward. 

Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/*
1 understand the problem
    1 rephrase - return a boolean if s is a palindrome
    2 identify inputs - s a string that can contain any char
    3 identify outputs - boolean
    4 is it solvable - yes
    5 key info: any char, compare all chars to be same case, strip out any non alphanumeric
2 explore examples
3 break it down
4 solve/simplify
5 refactor
*/
function isPalindrome(s) {
  if (s.length < 2) return true;
  const cleanS = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let start = 0;
  let end = cleanS.length - 1;
  while (end > start) {
    if (cleanS[start] !== cleanS[end]) return false;
    start++;
    end--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
