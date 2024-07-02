/*
Given an integer array nums and an integer k, 
return true if there are two distinct indices i and j in the array,
such that nums[i] == nums[j] and abs(i - j) <= k.

conditions:
elements are the same
absolute difference between both indices is at most === to k

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*/

/*
1. Understand the problem
    1. Rephrase:
    identify two elements that are the same 
    and the difference between their idxs is at most K

    2. Identify inputs -> nums=number[], k=number
    3. Identify outputs -> boolean
    4. Can we solve? -> YES
    5. Key data -> first condition refers to el, second refers to idx
2. Explore examples
3. Break it down
4. Solve/Simplify
5. Refactor 
*/

function containsNearbyDuplicate(nums, k) {
  //short circuit: nums.length < 2
  if (nums.length < 2) return false;

  const h = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (h.has(nums[i])) return true;

    h.add(nums[i]);

    if (h.size > k) {
      h.delete(nums[i - k]);
    }
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); //true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); //true*/
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); //false
console.log(containsNearbyDuplicate([99, 99], 2)); //true*/
