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

function freqSelectionSort(nums) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1;
  }
  return nums;
}

function freqBubbleSort(nums) {
  let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1;
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    let changes = false;

    for (let j = 0; j < i; j++) {
      let currentVal = nums[j];
      let currentValFreq = hashmap[nums[j]];

      if (currentValFreq >= hashmap[nums[j + 1]]) {
        if (
          hashmap[nums[j + 1]] === currentValFreq &&
          nums[j + 1] < currentVal
        ) {
          break;
        }

        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        changes = true;
      }
    }
    if (!changes) break;
  }

  return nums;
}

console.log(frequencyInsertionSort([2, 3, 1, 3, 2])); //[1,3,3,2,2]
console.log(freqSelectionSort([2, 3, 1, 3, 2])); //[1,3,3,2,2]
console.log(freqBubbleSort([2, 3, 1, 3, 2])); //[1,3,3,2,2]
