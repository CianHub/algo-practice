/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

/*
1. Understand the problem
    1. Rephrase: 
    2. Identify inputs
    3. Identify outputs
    4. Can we solve?
    5. Key data
2. Explore examples
3. Break it down
4. Solve
5. Refactor

*/

function groupAnagrams(strs) {
  // short circuit: strs.length === 0 return [strs];
  if (strs.length === 0) return [strs];
  const results = [];
  const hashmap = {};
  for (let str of strs) {
    const sortedStr = str.split("").sort();

    if (hashmap[sortedStr]) {
      results[hashmap[sortedStr] - 1].push(str);
    } else {
      const idx = results.length;
      results[idx] = [str];
      hashmap[sortedStr] = idx + 1;
    }
  }
  return results;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
//[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""]));
// [[""]]
console.log(groupAnagrams(["a"]));
//[["a"]]
