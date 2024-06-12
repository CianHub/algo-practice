/*
Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/
/*

1. Understand the problem
    1. rephrase - get the len of longest substring where all chars are unique
    2. identify inputs - string
    3. identify outputs - number
    4. do we have data
    5. key data
2. Explore examples
    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6
3. Break it down
4. solve/simplify
5. refactor



*/

function findLongestSubstring(str) {
  if (str.length < 2) return str.length;

  let start = 0;
  let end = 0;
  let len = 0;
  let hashmap = {};

  while (end < str.length) {
    let char = str[end];

    if (hashmap[char] !== undefined && hashmap[char] >= start) {
      // Move start to one position right of the previous index of the current character
      start = hashmap[char] + 1;
    }

    // Update the character's latest index
    hashmap[char] = end;

    // Calculate the current length of the substring
    len = Math.max(len, end - start + 1);

    // Move end to the next character
    end++;
  }

  return len;
}

console.log("", findLongestSubstring(""), 0); // 0
console.log("rithmschool", findLongestSubstring("rithmschool"), 7); // 7
console.log("thisisawesome", findLongestSubstring("thisisawesome"), 6); // 6
console.log("thecatinthehat", findLongestSubstring("thecatinthehat"), 7); // 7
console.log("bbbbbb", findLongestSubstring("bbbbbb"), 1); // 1
console.log("longestsubstring", findLongestSubstring("longestsubstring"), 8); // 8
console.log("thisishowwedoit", findLongestSubstring("thisishowwedoit"), 6); // 6
// l o n g e s t s u b s t r i n g
// 0 1 2 3 4 5 6 7 8 9 1 2 3 4 5 6
