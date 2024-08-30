function maxVowels(s, k) {
  const isVowel = (char) =>
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u";

  let right = k;
  let maxVowels = 0;
  let currVowels = 0;

  for (let i = 0; i < k; i++) currVowels += isVowel(s[i]) ? 1 : 0;

  maxVowels = currVowels;

  while (right < s.length) {
    if (isVowel(s[right - k])) currVowels > 0 && currVowels--;
    if (isVowel(s[right])) currVowels++;

    maxVowels = Math.max(currVowels, maxVowels);
    right++;
  }

  return maxVowels;
}

console.log(maxVowels("abciiidef", 3)); //3
console.log(maxVowels("aeiou", 2)); //2
console.log(maxVowels("tryhard", 4)); // 1
