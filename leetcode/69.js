/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Constraints:

0 <= x <= 231 - 1
*/

function mySqrt(x) {
  let guess = x;
  let accuracy = 0.000001;

  while (guess - x / guess > accuracy) guess = (guess + x / guess) / 2;

  let round = +guess.toFixed(0);
  return round > guess ? round - 1 : round;
}

console.log(mySqrt(4)); //2
console.log(mySqrt(8)); //2
