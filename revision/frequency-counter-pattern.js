// should return true if every val in arr1
// has its corresponding value squared in arr2

function frequencyCounter(arr1, arr2) {
  //short circuit by checking lengths
  if (arr1.length !== arr2.length) return false;

  // create hashmap
  const store = {};

  for (const val of arr2) store[val] = 1;

  for (const val of arr1) {
    if (store[val * val]) store[val * val]--;
    else {
      return false;
    }
  }

  return true;
}

console.log(frequencyCounter([1, 2, 3], [4, 1, 9]));
console.log(frequencyCounter([1, 2, 3], [1, 9]));
console.log(frequencyCounter([1, 2, 3], [4, 4, 1]));
