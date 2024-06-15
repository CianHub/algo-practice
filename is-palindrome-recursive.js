function isPalindrome(str) {
  /*
    Write a recursive function called isPalindrome 
    which returns true if the string passed to it is a palindrome 
    (reads the same forward and backward). 
    Otherwise it returns false.
    */
  /* 
    1. understand the problem
        1 rephrase - detect if str is the same in reverse return boolean 
        2 identify inputs - str
        3 identify outputs - str
        4 can we solve - yes
    2. explore examples
    3. break it down
    4. solve/simplify
    5. refactor
*/
  // base case str.length < 2 return true
  if (str.length < 2) return true;
  // if (str[0] !== str[str.length - 1]) return false
  if (str[0] !== str[str.length - 1]) return false;
  // return isPalindrome(str.substring(1, str.length - 1))
  return isPalindrome(str.substring(1, str.length - 1));
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
