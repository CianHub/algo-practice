/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

/*
1. Understand the problem
    1. Rephrase: 
    Remove all duplicates in place and return new length of nums with no duplicates
    2. ID inputs: number[]
    3. ID outputs: number
    4. solvable?: yes
    5. Note key data
2. Explore examples
3. Break it down
4. Solve
5. Refactor
*/

function removeDuplicates(nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    // We skip to next index if we see a duplicate element
    if (nums[i - 1] !== nums[i]) {
      /* Storing the unique element at insertIndex index and incrementing
               the insertIndex by 1 */
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  return insertIndex;
}

console.log(removeDuplicates([1, 1, 2]));
// k=2, nums = [1,2 ...] -> nums[0:k] should not contain dupes
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// k=5, nums = [0,1,2,3,4,_,_,_,_,_] -> nums[0:k] should not contain dupes
console.log(removeDuplicates([-3, -1, 0, 0, 0, 3, 3]));
// k =4 nums = [-3,-1,0,3]
