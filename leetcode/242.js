/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by 
rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? 
How would you adapt your solution to such a case?

*/

function isAnagram(s, t) {
  // short circuit: different lengths
  if (s.length !== t.length) return false;

  // hash map of s
  let hs = {};
  // hash map of t
  let ht = {};

  for (let i = 0; i < s.length; i++) {
    hs[s.charCodeAt(i)] = (hs[s.charCodeAt(i)] || 0) + 1;
    ht[t.charCodeAt(i)] = (ht[t.charCodeAt(i)] || 0) + 1;
  }

  // loop through s and check each value in t hashmap to make sure it exists
  for (let c of s)
    if (
      !ht[c.charCodeAt(0)] ||
      !hs[c.charCodeAt(0)] ||
      ht[c.charCodeAt(0)] !== hs[c.charCodeAt(0)]
    )
      return false;

  return true;
}

function isAnagram2(s, t) {
  if (s.length !== t.length) return false;

  const sArr = s.split("").sort();
  const tArr = t.split("").sort();

  return sArr.toString() === tArr.toString();
}

console.log(isAnagram("anagram", "margana")); // true
console.log(isAnagram("rat", "car")); // false
