function countUniqueValues(arr) {
  /*
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.

    There can be negative numbers in the array but it will always be sorted.

    1 Understand the problem
        1.1 Rephrase the problem in own words = Return the number of elements which occur once in the array
        1.2 Do we understand the inputs? = array of integers
        1.3 Do we understand the outputs? = integer
        1.4 Do we have all the info needed to solve? = yes
        1.5 What are the key details? 
            input = sorted array of integers
            output = integer
            quick exits = 0 elements, 1 element
            input is array so index starts at 0 and ends at length - 1
    2 Explore examples
        countUniqueValues([1,1,1,1,1,,2]) = 2
        countUniqueValues([1,2,3,4,4,4,5,6,12,13,13]) = 8
        countUniqueValues([]) = 0
        countUniqueValues([1]) = 1
    3 Break down the problem
    4 Solve/Simplify
    5 Refactor
    */

  // check array length === 0 or 1 if so return array.length
  if (arr.length < 2) return arr.length;

  // initialise two pointers at start and end
  let start = 0;
  let end = arr.length - 1;

  // initalise set
  const set = new Set();

  // loop through array with pointers add each element to set
  while (start < end) {
    set.add(arr[start]);
    set.add(arr[end]);
    start += 1;
    end -= 1;
  }

  // return set.size
  return set.size;
}

function countUniqueValuesAlt(arr) {
  /*
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.

    There can be negative numbers in the array but it will always be sorted.

    1 Understand the problem
        1.1 Rephrase the problem in own words = Return the number of elements which occur once in the array
        1.2 Do we understand the inputs? = array of integers
        1.3 Do we understand the outputs? = integer
        1.4 Do we have all the info needed to solve? = yes
        1.5 What are the key details? 
            input = sorted array of integers
            output = integer
            quick exits = 0 elements, 1 element
            input is array so index starts at 0 and ends at length - 1
    2 Explore examples
        countUniqueValues([1,1,1,1,1,,2]) = 2
        countUniqueValues([1,2,3,4,4,4,5,6,12,13,13]) = 8
        countUniqueValues([]) = 0
        countUniqueValues([1]) = 1
    3 Break down the problem
    4 Solve/Simplify
    5 Refactor
    */

  // check array length === 0 or 1 if so return array.length
  if (arr.length < 2) return arr.length;

  // initialise two pointers at start and next
  let start = 0;
  let next = start + 1;

  // initalise count
  let count = arr.length;

  // loop through array with pointers and compare start and next elements
  // reduce
  while (next <= arr.length - 1) {
    if (arr[start] === arr[next]) count--;
    start++;
    next++;
  }

  // return count
  return count;
}

function countUniqueValuesBest(arr) {
  // handle short arrays
  if (arr.length < 2) return arr.length;

  // initialise i at start
  let i = 0;

  // loop through arr, with j starting at 1
  for (let j = 1; j < arr.length; j++) {
    // if arr[j] is unique -> increment i and set arr[i] to the unique valie
    // this effectively removes the duplicates in the array and creates a duplicate free sub array as far as index i as we go
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // return i + 1 as i is an index so starts at 0 adding one returns the length of the sub array containg all the unique values
  return i + 1;
}

let val = countUniqueValuesBest([1, 1, 1, 1, 1, 2]);

console.log(val, `Solution is ${val === 2 ? "Correct" : "Incorrect"}`);

val = countUniqueValuesBest([1, 2, 3, 4, 4, 4, 5, 6, 12, 13, 13]);

console.log(val, `Solution is ${val === 8 ? "Correct" : "Incorrect"}`);

val = countUniqueValuesBest([]);

console.log(val, `Solution is ${val == 0 ? "Correct" : "Incorrect"}`);

val = countUniqueValuesBest([1]);

console.log(val, `Solution is ${val === 1 ? "Correct" : "Incorrect"}`);
