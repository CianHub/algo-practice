function frequencyInsertionSort(nums) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1;
  }

  for (let i = 1; i < nums.length; i++) {
    let currentValFreq = hashmap[nums[i]];
    let currentVal = nums[i];

    let j = i - 1;

    while (j >= 0 && hashmap[nums[j]] >= currentValFreq) {
      if (hashmap[nums[j]] === currentValFreq && nums[j] > currentVal) {
        break;
      }

      nums[j + 1] = nums[j];
      j--;
    }

    nums[j + 1] = currentVal;
  }

  return nums;
}

console.log(frequencyInsertionSort([2, 3, 1, 3, 2])); //[1,3,3,2,2]
