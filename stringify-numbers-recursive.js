/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, 
and not modify the original. Keep the original object unchanged.
*/

function stringifyNumbers(obj) {
  const objClone = JSON.parse(JSON.stringify(obj));

  function helper(obj) {
    const keys = Object.keys(obj);

    for (const key of keys) {
      if (typeof obj[key] === "number") obj[key] = `${obj[key]}`;
      if (typeof obj[key] === "object") helper(obj[key]);
    }

    return obj;
  }

  return helper(objClone);
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
