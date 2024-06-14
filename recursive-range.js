// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  /*
    Write a function called recursiveRange which accepts a number and 
    adds up all the numbers from 0 to the number passed to the function 
    */
  /*
    1 Understand the problem
    2 explore examples
    3 break it down
    4 solve simplify
    5 refactor
    */
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6)); // 21

//console.log(recursiveRange(10)); // 55
