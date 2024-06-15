function flatten(arr, newArr = []) {
  /*
  Write a recursive function called flatten which accepts: 
  an array of arrays and 
  returns a new array with all values flattened.
  */
  /*
  1 understand the problem
    1 rephrase -> 
    recursively extract every element in every array return a new single 1D array
    2 identify inputs -> array of integers
    3 identify outputs -> array of integers
    4 can we solve? -> yes
    5 key data: 
  2 explore examples
  3 break it down
  4 solve/simplify
  5 refactor
  */
  //console.log("current arr: ", arr);
  //console.log("current el: ", arr[0]);

  // base case arr.length === 0 return newArr
  if (arr.length === 0 || typeof arr !== "object") return newArr;
  // if (typeof arr[0] === 'number') newArr.push(arr[0])
  if (typeof arr[0] === "number") newArr.push(arr[0]);
  // if (typeof arr[0] === 'object') return flatten(arr[0], newArr);
  /*
  if (typeof arr[0] === "object")
    for (let el of arr[0]) {
      typeof el === "object" ? flatten(el, newArr) : newArr.push(el);
    }
*/
  if (typeof arr[0] === "object") flatten(arr[0], newArr);
  return flatten(arr.slice(1), newArr);
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
