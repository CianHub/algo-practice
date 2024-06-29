/*
Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the letters 
from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/*
1. understand the problem
    1. rephrase - check if the chars in ransomNote are all included in magazine return boolean
    2. identify inputs - 2 strs
    3. identify outputs - boolean
    4. can we solve? - yes
    5. key data
2. explore examples
3. break it down
4. solve/simplify
5. refactor
*/

function canConstruct(ransomNote, magazine) {
  // short circuit: ransomNote.length > magazine.length
  if (ransomNote.length > magazine.length) return false;
  // create hashmap
  const hashmap = {};
  // loop through magazine and store each char in hashmap with char count
  for (let char of magazine) hashmap[char] = (hashmap[char] || 0) + 1;

  // loop through ransomNote and check if hashmap[char] exists
  for (let char of ransomNote) {
    // if so decrement
    if (hashmap[char]) hashmap[char]--;
    // if not return false
    else return false;
  }
  // return true
  return true;
}

console.log(canConstruct("a", "b")); //false
console.log(canConstruct("aa", "ab")); //false
console.log(canConstruct("aa", "aab")); //true
