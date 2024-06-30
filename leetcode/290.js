/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, 
such that there is a bijection between a 
letter in pattern and a non-empty word in s.

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.

*/

/*
1 Understand the problem
    1. rephrase: where each word in s corresponds to a portion of pattern, return if s follows patterm
    2. identify inputs: pattern = str, s = str
    3. identify outputs: boolean
    4. can we solve: yes
    5. key data
2 explore examples
3 break it down
4 solve
5 refactor
*/

function wordPattern(pattern, s) {
  // split s into array
  const sArr = s.split(" ");

  // short circuit
  if (sArr.length !== pattern.length) return false;

  const hashmapPattern = {};
  const hashmapS = {};

  // loop through pattern with ndex
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = sArr[i];

    // set hashmap[pattern[i]] = s[i] if it doesnt exist
    if (!hashmapPattern["p" + char]) hashmapPattern["p" + char] = word;
    if (!hashmapS["s" + word]) hashmapS["s" + word] = char;
  }

  // loop through pattern with index
  for (let i = 0; i < pattern.length; i++) {
    //    if hashmap[pattern[i]] !== s[i] return false
    const char = pattern[i];
    const word = sArr[i];

    if (hashmapPattern["p" + char] !== word || hashmapS["s" + word] !== char)
      return false;
  }

  // return true
  return true;
}

console.log(wordPattern("abba", "dog cat cat dog")); //true
console.log(wordPattern("abba", "dog cat cat fish")); //false
console.log(wordPattern("aaaa", "dog cat cat dog")); //false
console.log(wordPattern("abba", "dog dog dog dog")); //false
console.log(wordPattern("abba", "dog constructor constructor dog")); //true
