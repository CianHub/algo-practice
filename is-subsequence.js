function isSubsequence(str1, str2) {
  /*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/
  /*
1. Understand the problem
    1 rephrase = check if the characters in the first string appear as a subsequence e.g. in the same order in the second string
    2 identify inputs = two strings
    3 indentify outputs = boolean
    4 check if problem can be solved with current info = yes
    5 key data (if required)
2. Explore examples
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
3. break it down
4. solve/simplify
5. refactor
*/

  // check if str2.length < str1.length return false
  //if (str2.length < str1.length) return false;
  // init x pointer at 0
  let x = 0;

  // loop through str2
  for (let char of str2) {
    // check if str1.length === x
    // return true
    if (str1.length <= x) return true;
    // check if str1[x] === el, x++
    if (str1[x] === char) x++;
  }

  console.log(x, str1.length);

  // return false
  return false;
}

function isSubsequenceAlt(str1, str2) {
  /*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/
  /*
1. Understand the problem
    1 rephrase = check if the characters in the first string appear as a subsequence e.g. in the same order in the second string
    2 identify inputs = two strings
    3 indentify outputs = boolean
    4 check if problem can be solved with current info = yes
    5 key data (if required)
2. Explore examples
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
3. break it down
4. solve/simplify
5. refactor
*/

  let x = 0;
  let y = 0;

  while (y < str2.length) {
    if (x >= str1.length) return true;
    if (str1[x] === str2[y]) x++;
    y++;
  }

  return x >= str1.length;
}

console.log(isSubsequenceAlt("hello", "hello world"));
console.log(isSubsequenceAlt("sing", "sting"));
