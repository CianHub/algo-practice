/*
Given an array nums. We define a running sum of an array as:

runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

function runningSum(nums) {
  let prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) prefix.push(prefix[i - 1] + nums[i]);

  return prefix;
}

console.log(runningSum([3, 1, 2, 10, 1])); //[3,4,6,16,17]
console.log(runningSum([1, 1, 1, 1, 1])); //[1,2,3,4,5]
console.log(runningSum([1, 2, 3, 4])); //[1,3,6,10]
