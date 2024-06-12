function isPalindrome(s) {
  /*
  Write a function that takes a string, s, 
  as an input and determines whether or not it is a palindrome.

  A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward.
*/
  /*
1. understand the problem
    1. rephrase
    2. identify inputs
    3. identify outputs
    4. can we solve?
    5. list key info if necessary
2. explore examples
        isPalindrome("kaYak") // true
        isPalindrome("hello") // false
        isPalindrome("A") // true
3. break it down
4. solve/simplify
5. refactor
*/

  // check if s.length < 2 return true
  if (s.length < 2) return true;
  // init start = 0
  let start = 0;
  // init end  = s.length - 1
  let end = s.length - 1;
  // while start < end
  while (start < end) {
    // if s[start] !== s[end] return false
    if (s[start] !== s[end]) return false;
    // start++
    start++;
    // end--
    end--;
  }

  // return true
  return true;
}

console.log(isPalindrome("kaYak")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A")); // true
