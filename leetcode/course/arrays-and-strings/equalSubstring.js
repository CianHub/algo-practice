function equalSubstring(s, t, maxCost) {
  const getCharValue = (char) => char?.charCodeAt(0);

  const calcCost = (sChar, tChar) =>
    Math.abs(getCharValue(sChar) - getCharValue(tChar));

  let maxSubstringLen = 0;
  let currCost = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    currCost += calcCost(s[right], t[right]);

    while (currCost > maxCost) {
      currCost -= calcCost(s[left], t[left]);
      left++;
    }

    maxSubstringLen = Math.max(maxSubstringLen, right - left + 1);
  }

  return maxSubstringLen;
}

console.log(equalSubstring("abcd", "bcdf", 3)); //3
console.log(equalSubstring("abcd", "cdef", 3)); //1
console.log(equalSubstring("pxezla", "loewbi", 25)); //4
