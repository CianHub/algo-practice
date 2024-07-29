/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', 
and they can appear in both lower and upper cases, more than once.
*/

function reverseVowels(s) {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  let splitS = s.split("");

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (!vowels[splitS[i].toLowerCase()] && i < j) i++;
    while (!vowels[splitS[j].toLowerCase()] && i < j) j--;

    let temp = splitS[i];
    splitS[i] = splitS[j];
    splitS[j] = temp;
    i++;
    j--;
  }

  return splitS.join("");
}

console.log(reverseVowels("aA")); // Aa
console.log(reverseVowels("leetcode")); //leotcede
