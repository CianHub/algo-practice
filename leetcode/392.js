/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the
 original string by deleting some (can be none) of the characters 
 without disturbing the relative positions of the remaining characters. 
 
 (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

/*
 1 Understand the problem
    1 Rephrase -> return if s is a possible subseq of t
    2 identify inputs -> s lower case English letters only, t is the same
    3 identify outputs -> boolean
    4 Can we solve -> yes
    5 Key Info
 2 Explore examples
 3 Break it Down
 4 Solve/Simplify
 5 Refactor
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
  if (s === t) return true;
  if (s !== t && s.length === t.length) return false;
  while (t) {
    if (s[0] === t[0]) s = s.slice(1);
    if (!s) return true;
    t = t.slice(1);
  }
  return false;
}

console.log(isSubsequence("abc", "ahbgdc")); //true
console.log(isSubsequence("axc", "ahbgdc")); //false
console.log(isSubsequence("bac", "abajkhgdgc")); //true
