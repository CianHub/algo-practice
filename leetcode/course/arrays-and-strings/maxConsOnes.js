/*
Given a binary array nums and an integer k, 
return the maximum number of consecutive 1's in the array if you can flip at most k 0's
*/

function longestOnes(nums, k) {
  if (nums.length <= k) return k;

  let left = 0;
  let right = 1;
  let ans = 0;
  let numOfZeroes = nums[left] === 0 ? 1 : 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      numOfZeroes += 1;
    }

    while (numOfZeroes > k) {
      if (nums[left] === 0) numOfZeroes--;
      left++;
    }

    ans = Math.max(right - left + 1, ans);
    right++;
  }

  return ans;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)
); //10
