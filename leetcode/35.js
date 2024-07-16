/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 

If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

/*
1. Understand the problem
    1. rephrase -> return the idx of target in a sorted array or where it would fit
    2. id inputs -> arr, number to find
    3. id outputs -> number 
2. Explore examples
3. Break it down
4. Solve
5. refactor
*/

function searchInsert(nums, target) {
  if (nums.length < 1) return -1;
  if (target === nums[0] || nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;

  let start = 0;
  let end = nums.length;
  let mid = Math.floor((start + end) / 2);

  // mid should end up either at target
  // the closest value that is still less than target
  while (start < mid && mid < end) {
    if (nums[mid] === target) return mid;
    else {
      if (nums[mid] > target) end = mid;
      else if (nums[mid] < target) start = mid;
      mid = Math.floor((start + end) / 2);
    }
  }

  // mid is not in nums and should be at mid + 1
  return mid + 1;
}

function searchInsert2(nums, target) {
  let start = 0;
  let pivot;
  let end = nums.length - 1;

  while (start <= end) {
    pivot = Math.floor((start + end) / 2);
    if (nums[pivot] === target) return pivot;
    else if (nums[pivot] > target) end = pivot - 1;
    else start = pivot + 1;
  }

  return start;
}

console.log(searchInsert([1, 3, 5, 6], 5)); //2
console.log(searchInsert([1, 3, 5, 6], 2)); //1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1], 1)); // 0
console.log(searchInsert([1, 3], 1)); // 0
