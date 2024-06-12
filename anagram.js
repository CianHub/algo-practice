function anagram(str1, str2) {
  /* 
    Given 2 strings, write a function to determine if the second string is an anagram of the first.

    anagram = word, phrase or name fomed by rearranging the letters of another
    1. Understand the problem
        1.1 restate problem = Do str1 and str2 contain the exact same chracters and number of chars?

        1.2 what are the inputs that go into the problem? = two strings

        1.3 what are the outpts that come from the solution = true or galse

        1.4 can the outputs be determined by the inputs? Do we have have enough info? =
            can strings contain special chars? no
            do we need to include these special chars as criteria for an angram? no
            casing? lower
            numbers>? no

        1.5 What are the bits that matter? = same length, same chars return true or false
    2. Explore examples
        anagram('', '') = true
        anagram('aaz', 'zza') = false
        anagram('qwerty', 'qeywrt') = true
        anagram('rat', 'car) = false
    3. Break it down
    4. solve/simplify
    5. refactor
    */

  // compare length of strings, if not equal return false
  if (str1.length !== str2.length) return false;

  // create a hashmap
  const hashmap = {};

  // loop through str1, store each element in hashmap or increment if multiple
  for (let char of str1) hashmap[char] = (hashmap[char] || 0) + 1;

  // loop through str2, check if hashmap contains it, if so decrement value
  for (let char of str2) {
    // if not return false
    if (!hashmap[char]) return false;

    hashmap[char]--;
  }

  return true;
}

console.log(
  `Solution is ${anagram("", "") === true ? "correct" : "incorrect"}`
);
console.log(
  `Solution is ${anagram("aaz", "zza") === false ? "correct" : "incorrect"}`
);
console.log(
  `Solution is ${
    anagram("qwerty", "qeywrt") === true ? "correct" : "incorrect"
  }`
);
console.log(
  `Solution is ${anagram("rat", "car)") === false ? "correct" : "incorrect"}`
);
