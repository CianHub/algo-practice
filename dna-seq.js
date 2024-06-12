function dnaSeq(str, len) {
  /*
Given a string, s, that represents a DNA subsequence, and a number 𝑘 return all the 
contiguous subsequences (substrings) of length 𝑘 that occur more than once in the string. 
The order of the returned subsequences does not matter.

If no repeated substring is found, the function should return an empty set.

The DNA sequence is composed of a series of nucleotides abbreviated as: A, C, G and T. 
For example, ACGAATTCCG is a DNA sequence. 

When studying DNA, it is useful to identify repeated sequences in it.
*/
  /*
1. Understand the problem
    1. rephrase - return any substrings that repeat more than 1 of length k
    2. identify inputs - k int, s string
    3. identify outputs - array of strings?
    4. do we have enough? ye
    5. key data
2. Explore examples
    dnaSeq("AGCTGAAAGCTTAGCTG", 5) // ["AGCTG"]
    dnaSeq("AGAGCTCCAGAGCTTG", 6) // ["AGAGCT"]
    dnaSeq("ATATATATATATATAT", 6) // ["TATATA", "ATATAT"]
3. break it down
4. solve/simplify
5. refactor
*/
  // const results = []
  const results = new Set();
  // check if str.length < len || !str
  if (str.length < len) return results;
  // init start = 0
  let start = 0;
  // init end = len - 1
  let end = len - 1;
  // init hashmap = {}
  const hashmap = {};
  // while end < str.length
  while (end < str.length) {
    // let substr = str.substring(start, end)
    let substr = str.substring(start, end + 1);
    // hashmap[substr] = (hashmap[substr] || 1) + 1
    hashmap[substr] = (hashmap[substr] || 0) + 1;

    if (hashmap[substr] > 1) results.add(substr);
    // end++
    end++;
    // start++
    start++;
  }

  return results;
}

console.log(dnaSeq("AGCTGAAAGCTTAGCTG", 5)); // ["AGCTG"]
console.log(dnaSeq("AGAGCTCCAGAGCTTG", 6)); // ["AGAGCT"]
console.log(dnaSeq("ATATATATATATATAT", 6)); // ["TATATA", "ATATAT"]
