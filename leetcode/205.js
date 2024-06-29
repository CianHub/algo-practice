/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character 
while preserving the order of characters. 

No two characters may map to the same character, but a character may map to itself.
*/

/*
isomorphic means the same distribution of letters in the same order

1. understand the problem
    1. rephrase
    2. identify inputs
    3. identify outputs
    4. can we solve?
    5. key data
2. explore examples
3. break it dowmn
4. solve
5. refactor
*/

/*
collect the counts of both in hash maps compare the values of the hasmaps they should be the same*/

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;

  const hashmapS = {};
  const hashmapT = {};

  for (let i = 0; i < s.length; i++) {
    if (hashmapS[s[i]] && hashmapS[s[i]] !== t[i]) return false;
    else hashmapS[s[i]] = t[i];

    if (hashmapT[t[i]] && hashmapT[t[i]] !== s[i]) return false;
    else hashmapT[t[i]] = s[i];
  }

  return true;
}

console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true
console.log(isIsomorphic("bbbaaaba", "aaabbbba")); //false
console.log(isIsomorphic("badc", "baba")); // false
