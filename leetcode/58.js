/*
Given a string s consisting of words and spaces, 
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
 */

/*
 */

function lengthOfLastWord(s) {
  const splitS = s.trim().split(" ");
  return splitS[splitS.length - 1].length;
}

function lengthOfLastWord2(s) {
  const trimmedS = s.trim();
  return trimmedS.length - trimmedS.lastIndexOf(" ") - 1;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
console.log(lengthOfLastWord("luffy is still joyboy")); //6
console.log(lengthOfLastWord2("Hello World")); // 5
console.log(lengthOfLastWord2("   fly me   to   the moon  ")); //4
console.log(lengthOfLastWord2("luffy is still joyboy")); //6
