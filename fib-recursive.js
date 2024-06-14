// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib1(n) {
  // add whatever parameters you deem necessary - good luck!
  /*
  Write a recursive function called fib which accepts a number and 
  returns the nth number in the Fibonacci sequence. 
  
  Recall that the Fibonacci sequence is the sequence of whole numbers: 
  1, 1, 2, 3, 5, 8,
   ... which starts with 1 and 1, 
   and where every number thereafter is equal to the sum of the previous two numbers.
  */
  /*
   1 understand the problem
        1 rephrase -> generate the fib seq up until the nth number adn return it
        2. identify inputs - n positive int
        3. identify outputs - fib[n] positive integer
        4. can we solve? yes
        5. key data
   2 explore examples
        // fib(4) // 3
        // fib(10) // 55
        // fib(28) // 317811
        // fib(35) // 9227465
   3 break it down
   4 solve/simplify
   5 refactor

   */
  // short circuit
  if (n < 3) return 1;

  // create  array with opening entires
  const fib = [1, 1];

  //create helper recursive fn
  function recursiveFib(n, count = 2) {
    if (n === 2) return;
    fib.push(fib[count - 2] + fib[count - 1]);
    return recursiveFib(n - 1, count + 1);
  }

  recursiveFib(n);

  return fib[n - 1];
}

function fib2(n) {
  if (n <= 2) return 1;
  return fib2(n - 1) + fib2(n - 2);
}

console.log(fib2(4)); // 3
console.log(fib2(10)); // 55
console.log(fib2(28)); // 317811
console.log(fib2(35)); // 9227465
