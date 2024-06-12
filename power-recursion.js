// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, powerVal) {
  //console.log(powerVal);
  /* 
  Write a function called power which accepts a base and an exponent. 
  
  The function should return the power of the base to the exponent. 

  This function should mimic the functionality of Math.pow() 
  - do not worry about negative bases and exponents. 
  */
  /*
  1. Understand the problem
    1. Rephrase -> multiply base by itself power number of times, using recursion
    2. id inputs -> positive int for base and power
    3. id outputs -> int
    4. ready? -> yes
    5. Note key data    
  2. Explore examples
    // power(2,0) // 1
    // power(2,2) // 4
    // power(2,4) // 16
  3. Break it Down
  4. Solve/Simplify
  5. Refactor
  */

  // write base case if power === 0 return 0
  if (powerVal === 0) return 1;
  return base * power(base, powerVal - 1);
}
