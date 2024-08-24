/*
Given an array of integers nums, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.
*/

function minStartValue(nums) {
  let startValue = 1;
  let prefix = [nums[0]];
  let minimumPrefixSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const prefixEntry = nums[i] + prefix[i - 1];
    prefix.push(prefixEntry);

    if (prefixEntry < minimumPrefixSum) minimumPrefixSum = prefixEntry;
  }

  while (startValue + minimumPrefixSum < 1) startValue++;

  return startValue;
}

console.log(minStartValue([-3, 2, -3, 4, 2])); //5
console.log(minStartValue([1, 2])); //1
console.log(minStartValue([-3, 6, 2, 5, 8, 6])); //4
