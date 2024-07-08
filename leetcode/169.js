/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 

You may assume that the majority element always exists in the array.
*/

/*
1. Understand the problem
    1. Rephrase: Return the element that appears > n/2 times
    2. Identify ins
    3. ID outs
    4. Can we sovle?
    5. Key data
2. Explore examples
3. Break it down
4. Solve
5. Refactor
*/

function majorityElement(nums) {
  if (nums.length === 1) return nums[0];
  // calc majority element threshold
  const majEl = nums.length / 2;
  // create hashamp
  const hmap = new Map();
  // loop through nums
  for (let val of nums) {
    // add/count each value in hashmap
    if (hmap.has(val)) {
      let newVal = hmap.get(val) + 1;
      hmap.set(val, newVal);

      if (newVal > majEl) return val;
    } else hmap.set(val, 1);
  }
}

function majorityElement2(nums) {
  return nums.sort()[Math.floor(nums.length / 2)];
}

function majorityElement3(nums) {
  let majorityElementRec = (lo, hi) => {
    if (lo === hi) return nums[lo];

    let mid = Math.floor((hi - lo) / 2) + lo;
    let left = majorityElementRec(lo, mid);
    let right = majorityElementRec(mid + 1, hi);

    if (left === right) {
      return left;
    }

    let leftCount = 0;
    let rightCount = 0;
    for (let i = lo; i <= hi; i++) {
      if (nums[i] === left) {
        leftCount++;
      }
      if (nums[i] == right) {
        rightCount++;
      }
    }

    return leftCount > rightCount ? left : right;
  };

  return majorityElementRec(0, nums.length - 1);
}

console.log(majorityElement([3, 2, 3]));
// 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// 2
console.log(majorityElement2([3, 2, 3]));
// 3
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]));
// 2
console.log(majorityElement2([(-1, 1, 1, 1, 2, 1)]));
// 1
