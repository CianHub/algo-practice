/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

function longestCommonPrefix(strs) {
  let prefix = "";

  let longest = strs.sort(function (a, b) {
    return b.length - a.length;
  })[0];

  for (let i = 0; i < longest.length; i++) {
    if (strs.every((str) => str[i] === longest[i])) prefix += longest[i];
    else break;
  }

  return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); //"fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); //''
