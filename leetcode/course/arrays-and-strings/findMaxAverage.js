/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. 
Any answer with a calculation error less than 10-5 will be accepted.
*/

function findMaxAverage(nums, k) {
  if (k === 1 && nums.length === 1) return +(nums[0] / k).toFixed(5);

  let ans = 0;
  let sum = 0;
  let left = 1;
  let right = k;

  for (let i = 0; i < k; i++) sum += nums[i];

  ans = +(sum / k).toFixed(5);

  while (right < nums.length) {
    sum = sum - nums[left - 1] + nums[right];
    let currAvg = +(sum / k).toFixed(5);

    ans = Math.max(currAvg, ans);
    left++;
    right++;
  }

  return ans;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); //12.75000
console.log(findMaxAverage([5], 1)); //5.00000
console.log(findMaxAverage([0, 4, 0, 3, 2], 1));
console.log(findMaxAverage([4, 2, 1, 3, 3], 2)); //3.00000
