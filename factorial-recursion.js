function factorial(num) {
  /* Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1. */
  /*
  1. Understand the problem
    1. Rephrase -> get factorial, using recursion
    2. id inputs -> positive int for base and power
    3. id outputs -> int
    4. ready? -> yes
    5. Note key data    
  2. Explore examples
    // factorial(1) // 1
    // factorial(2) // 2
    // factorial(4) // 24
    // factorial(7) // 5040
  3. Break it Down
  4. Solve/Simplify
  5. Refactor
  */

  // base case = num < 2 return 1
  if (num < 2) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040
