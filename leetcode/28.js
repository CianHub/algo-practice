/*
Given two strings needle and haystack, 
return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters
*/

/*
1. Understand the problem
    1. rephrase: if haystack includes needle return the index of its first occurance
    2. identify inputs
    3. identify outputs
    4. can we solve
    5. key data
2. explore examples
3. break it down
4. solve
5. refactor
 */

function strStr(haystack, needle) {
  // short circuit: haystack.length < needle.length
  if (haystack.length < needle.length) return -1;

  // loop through haystack
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let haystackCopy =
        haystack.substring(0, i) +
        needle +
        haystack.substring(i + needle.length);

      if (haystackCopy === haystack) return i;
    }
  }

  return -1;
}

console.log(strStr("sadbutsad", "sad"));
// 0
// "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.
console.log(strStr("leetcode", "leeto"));
// -1
// "leeto" did not occur in "leetcode", so we return -1.
console.log(strStr("mississippi", "issip"));
// 4
