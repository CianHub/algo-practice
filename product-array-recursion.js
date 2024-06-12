function productOfArray(arr) {
  /*
    Write a function called productOfArray which takes in an array of numbers 
    and returns the product of them all.
    */
  /*
    1. Understand the problem
    1. Rephrase -> multiply get the product of the array elements, using recursion
    2. id inputs -> array of ints
    3. id outputs -> int
    4. ready? -> yes
    5. Note key data    
  2. Explore examples
   // productOfArray([1,2,3]) // 6
    // productOfArray([1,2,3,10]) // 60
  3. Break it Down
  4. Solve/Simplify
  5. Refactor
    */

  // base case arr.length === 1 return arr[0]
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60)
