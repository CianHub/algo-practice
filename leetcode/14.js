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

function checkForPrefix(str, prefix) {
  let count = 0;
  while (count < prefix.length) {
    if (prefix[count] !== str[count]) return 0;
    count++;
  }
  return 1;
}

function longestCommonPrefix2(strs) {
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];

  let hash = {};

  while (prefix.length > 0) {
    for (let i = 1; i < strs.length; i++)
      hash[prefix] = (hash[prefix] || 0) + checkForPrefix(strs[i], prefix);

    if (hash[prefix] === strs.length - 1) return prefix;
    else prefix = prefix.substring(0, prefix.length - 1);
  }

  return "";
}

function longestCommonPrefix3(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix.length === 0) return "";
    }
  }

  return prefix;
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"])); //"fl"
console.log(longestCommonPrefix2(["dog", "racecar", "car"])); //''
console.log(longestCommonPrefix2(["a"])); //'a'
