const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, callback) {
  /*
  Write a recursive function called someRecursive which accepts an array and a callback. 
  
  The function returns true if a single value in the array returns true 
  when passed to the callback. 
  
  Otherwise it returns false.
  */

  /*
  1. understand the problem
    1. rephrase: 
    recursively run the callback on each array el and return true as soon as the callback returns true 
    else false
    2. identify inputs - arr of numbers, callback with a boolean return type
    3. identify outputs - boolean
    4. cane we solve? - yes
    5. key info: 
  2. explore exmaples
  3. break it down
  4. solve/simplify
  5. refactor
  
  */

  // base case arr.length === 0 return false
  if (arr.length === 0) return false;
  // if (callback(arr[0])) return true
  if (callback(arr[0])) return true;
  // return someRecursive(arr.slice(1))
  return someRecursive(arr.slice(1), callback);
}

// SAMPLE INPUT / OUTPUT

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
