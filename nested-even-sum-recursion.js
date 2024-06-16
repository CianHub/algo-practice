function nestedEvenSum(obj) {
  /*
  Write a recursive function called nestedEvenSum. 
  Return the sum of all even numbers in an object which may contain nested objects.
   */
  /*
  1. Understand the problem
    1. rephrase the problem:
        find every even number contained in the obj and add them together
    2. identify inputs -> obj
    3. identify outputs -> int
    4. can we solve? -> yes
    5. key data: 
  4. identify outputs
  2. explore examples
  3. break it down
  4. solve/simplify
  5. refactor
   */

  let sum = 0;

  function helper(obj) {
    for (const key of Object.keys(obj)) {
      if (typeof obj[key] === "number" && obj[key] % 2 === 0) sum += obj[key];
      else if (typeof obj[key] === "object") helper(obj[key], sum);
    }
  }

  helper(obj);
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  })
); // 10
