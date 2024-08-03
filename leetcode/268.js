/*
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.
 

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/

function missingNumber(nums) {
  // quick sort
  // iterate over sorted array make sure index matches each val and last val === arr.length

  function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(idx1, idx2, arr) {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    let pivot = arr[start];
    let pivotIdx = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        pivotIdx++;
        swap(i, pivotIdx, arr);
      }
    }

    swap(pivotIdx, start, arr);

    return pivotIdx;
  }

  function quicksort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIdx = pivot(arr, left, right);
      //left of pivot
      quicksort(arr, left, pivotIdx - 1);
      //right of pivot
      quicksort(arr, pivotIdx + 1, right);
    }

    return arr;
  }

  let sortedNums = quicksort(nums);

  for (let i = 0; i < sortedNums.length; i++) {
    if (i !== sortedNums[i]) return i;
  }

  return nums.length;
}

console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([0, 1])); //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
