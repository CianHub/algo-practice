function radixSort(nums) {
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function mostDigits(nums) {
    let mostDigits = 0;

    for (let i = 0; i < nums.length; i++)
      mostDigits = Math.max(mostDigits, digitCount(nums[i]));

    return mostDigits;
  }

  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  function createBucket(x) {
    let arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push([]);
    }

    return arr;
  }

  let k = mostDigits(nums);

  while (k >= 0) {
    let newNums = [];
    let bucket = createBucket();

    for (let i = 0; i < nums.length; i++) {
      let currentVal = nums[i];
      let digit = getDigit(currentVal, k);

      bucket[digit].push(currentVal);
    }

    for (let i = 0; i < bucket.length; i++) {
      let currentSubBucket = bucket[i];
      newNums = [...newNums, ...currentSubBucket];
    }

    nums = newNums;

    k--;
  }

  return nums;
}

console.log(radixSort([9, 1, 2, 6, 8, 7]));
