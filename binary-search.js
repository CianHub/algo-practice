function binarySearch(arr, target) {
  /*
Write a function called binarySearch which accepts a sorted array and a value 
and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch:

you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/
  /*
1 understand the problem
    1 rephrase -> write  a fn that finds a value in a sorted array by reducing the elements
2 explore examples
3 break it down
4 solve
5 refactor
*/
  // short circuit
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === target ? 0 : -1;
  // set start point to 0
  let start = 0;
  // set end pointer = arr.length -1
  let end = arr.length - 1;
  // set mid = Math.floor(end / 2)
  let mid = Math.floor(start + end / 2);

  // while (start < end) {
  while (start <= end && arr[mid] !== target) {
    // if (mid > target ) {end = mid; mid = Math.floor(end / 2) }
    // if (mid < target ) {start = mid; mid = Math.floor(end - start / 2) }
    if (arr[mid] < target) start = mid + 1;
    else if (arr[mid] > target) end = mid - 1;

    mid = Math.floor((start + end) / 2);
  }
  return arr[mid] === target ? mid : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
