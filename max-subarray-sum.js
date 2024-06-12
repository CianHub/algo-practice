function maxSubarraySum(arr, seqNum) {
  /*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/
  /*

1. Understand the problem
    1. owm wpords - return the max sum of a comsecutive sequence of elements matching the length provided
    2. identify inputs - array of integers, length of sequence
    3. outputs - integer of the sum or null
    4. do we have enough fata?  yes
    5. key data 
2. explore examples
    maxSubarraySum([100,200,300,400], 2) // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
    maxSubarraySum([2,3], 3) // null
3. break it down
4. solve/simplify
5. refactor

*/

  // check arr.length > seqNum return null
  if (arr.length < seqNum) return null;
  // init sum at -infinity
  let sum = 0;
  // loop through array from 0 to seqNum and sum these numbers
  for (let i = 0; i < seqNum; i++) {
    sum += arr[i];
  }

  let temp = sum;

  //console.log("sum after first loop", sum);

  // loop through array start at seqNum
  for (let i = seqNum; i < arr.length; i++) {
    // init temp =subtract i - 1 from sum
    // add i to temp
    temp = temp - arr[i - seqNum] + arr[i];

    // if temp > sum
    // sum = temp
    if (temp > sum) sum = temp;
  }

  // return sum
  return sum;
}

console.log(
  maxSubarraySum([100, 200, 300, 400], 2),
  maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4),
  maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)
);
