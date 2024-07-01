/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

You can return the answer in any order.

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/*
1. Understand the problem
    1. Rephrase - return an arr of indices of 2 els from nums that sum == target
    2. Identify inputs - nums array of numbers, target int
    3. Identify outputs - array of 2 indices
    4. Can we solve? - yesh
    5. Key data? 
2. Explore examples
3. Break it down
4. Solve/Simplify
5. Refactor
*/

function twoSum(nums, target) {
  // short circuit: nums.length < 3 return [0, 1]
  if (nums.length < 3) return [0, 1];
  // create hashmap
  const h = {};
  //loop through nums add each el to hashmap with index as value
  //for (let i = 0; i < nums.length; i++)
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (h[remainder] !== undefined) return [i, h[remainder]];
    h[nums[i]] = i;
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0, 1]
