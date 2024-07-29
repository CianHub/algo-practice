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
    let startChar = splitS[i].toLowerCase();
    let endChar = splitS[j].toLowerCase();

    if (vowels[startChar] && vowels[endChar]) {
      let temp = splitS[i];
      splitS[i] = splitS[j];
      splitS[j] = temp;
      i++;
      j--;
    } else if (vowels[startChar] && !vowels[endChar]) {
      j--;
    } else if (!vowels[startChar] && vowels[endChar]) {
      i++;
    } else {
      i++;
      j--;
    }
  }

  return splitS.join("");
}

console.log(reverseVowels("aA")); // Aa
//console.log(reverseVowels("leetcode")); //leotcede
