function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[j + i]) break;
      else if (j === short.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
