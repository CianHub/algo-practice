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

function missingNumberQuickSort(nums) {
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

  quicksort(nums);

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) return i;
  }

  return nums.length;
}

function missingNumberHashmap(nums) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = 1;
  }

  const keys = Object.keys(hashmap);

  for (let i = 0; i < keys.length; i++) {
    if (i !== +keys[i]) return i;
  }

  return nums.length;
}

function missingNumberSet(nums) {
  let set = new Set(nums);
  let range = Array.from(Array(nums.length + 1).keys());

  for (let i = 0; i < range.length; i++) {
    if (!set.has(range[i])) return range[i];
  }
}

function missingNumberSimple(nums) {
  let numsSum = 0;
  let rangeSum = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i] !== undefined) numsSum += nums[i];
    rangeSum += i;
  }

  return rangeSum - numsSum;
}

console.log(missingNumberQuickSort([3, 0, 1])); //2
console.log(missingNumberQuickSort([0, 1])); //2
console.log(missingNumberQuickSort([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8

console.log(missingNumberHashmap([3, 0, 1])); //2
console.log(missingNumberHashmap([0, 1])); //2
console.log(missingNumberHashmap([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8

console.log(missingNumberSet([3, 0, 1])); //2
console.log(missingNumberSet([0, 1])); //2
console.log(missingNumberSet([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8

console.log(missingNumberSimple([3, 0, 1])); //2
console.log(missingNumberSimple([0, 1])); //2
console.log(missingNumberSimple([9, 6, 4, 2, 3, 5, 7, 0, 1])); //8
