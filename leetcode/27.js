/*
Given an integer array nums and an integer val, 
remove all occurrences of val in nums in-place. 

The order of the elements may be changed. 

Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, 
to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums 
contain the elements which are not equal to val. 

The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

/*
1. Understand the problem
    1. Rephrase: 
    Remove all occurances of val in nums in place and return new length of nums
    2. ID inputs: number[], number
    3. ID outputs: number
    4. solvable?: yes
    5. Note key data
2. Explore exampless
3. Break it down
4. Solve
5. Refactor
*/

function removeElement(nums, val) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    if (nums[start] === val) {
      // swaps current el with end el
      nums[start] = nums[end - 1];
      // only decrements end, does not affect start
      // nums[start] will remain the same
      // this means that each val el will be replaced
      end--;
    } else {
      start++;
    }
  }

  return end;
}

console.log(removeElement([3, 2, 2, 3], 3)); //2
//console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5
//console.log(removeElement([4, 5], 5)); //2
