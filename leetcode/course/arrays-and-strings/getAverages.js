/*
You are given a 0-indexed array nums of n integers, and an integer k.

The k-radius average for a subarray of nums centered at some index i with the radius k is 
the average of all elements in nums between the indices i - k and i + k (inclusive). 

If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at 
index i.

The average of x elements is the sum of the x elements divided by x, using integer division. 
The integer division truncates toward zero, which means losing its fractional part.

For example, the average of four elements 2, 3, 1, and 5 is (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75,
which truncates to 2.
 */

/*
question when worded in an understandable way:

You are given an array nums of integers and a number k.

For each index i in the array, you need to calculate the "k-radius average". 
To do this, consider the subarray that starts k positions before i and ends k positions after i. 
The "k-radius average" is the average of all the elements in this subarray. 
This average should be calculated using integer division (which means any fractional part should be discarded).

If it is not possible to include k elements before or after index i 
(i.e., because there aren’t enough elements at the beginning or end of the array), 
the k-radius average at index i should be set to -1.

Finally, return an array avgs that contains the k-radius average for each index i in the original array nums.
*/

function getAverages(nums, k) {
  if (k === 0) return nums;

  const kRadiusArr = [];
  const prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) prefix.push(nums[i] + prefix[i - 1]);
  for (let i = 0; i < nums.length; i++) {
    const startIdx = i - k;
    const endIdx = i + k;

    if (startIdx < 0 || endIdx > nums.length - 1) kRadiusArr.push(-1);
    else {
      const sumOfStartEndIdx =
        prefix[endIdx] - prefix[startIdx] + nums[startIdx];
      const numOfEls = k + k + 1;

      kRadiusArr.push(Math.floor(sumOfStartEndIdx / numOfEls));
    }
  }

  return kRadiusArr;
}

console.log(
  getAverages([40527, 53696, 10730, 66491, 62141, 83909, 78635, 18560], 2)
); //[-1,-1,46717,55393,60381,61947,-1,-1]
console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3)); //[-1,-1,-1,5,4,4,-1,-1,-1]
console.log(getAverages([8], 100000)); //[-1]
