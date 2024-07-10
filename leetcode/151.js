/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/

function reverseWords(s) {
  let splitS = s.split(" ");
  let reverse = "";

  for (let i = splitS.length - 1; i >= 0; i--) {
    let word = splitS[i];

    if (word.length > 0) reverse = reverse + " " + word;
  }
  return reverse.trim();
}

console.log(reverseWords("the sky is blue"));
// "blue is sky the"
console.log(reverseWords("  hello world  "));
// "world hello"
console.log(reverseWords("a good   example"));
//"example good a"
