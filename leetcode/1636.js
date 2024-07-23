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

  // Step 1: Create a hashmap to count the frequency of each number
  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1;
  }

  // Step 2: Implement bubble sort based on frequency and value
  for (let i = nums.length - 1; i >= 0; i--) {
    let changes = false;

    for (let j = 0; j < i; j++) {
      let currentVal = nums[j];
      let nextVal = nums[j + 1];
      let currentValFreq = hashmap[currentVal];
      let nextValFreq = hashmap[nextVal];

      // Compare based on frequency (increasing order)
      // If frequencies are the same, compare based on value (decreasing order)
      if (
        currentValFreq > nextValFreq ||
        (currentValFreq === nextValFreq && currentVal < nextVal)
      ) {
        // Swap values if needed
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        changes = true;
      }
    }
    if (!changes) break; // If no changes, the array is sorted
  }

  return nums;
}

//console.log(frequencyInsertionSort([2, 3, 1, 3, 2])); //[1,3,3,2,2]
//console.log(freqSelectionSort([2, 3, 1, 3, 2])); //[1,3,3,2,2]
console.log(freqBubbleSort([-1, 1, -6, 4, 5, -6, 1, 4, 1])); //[1,3,3,2,2]
//[5,-1,4,4,-6,-6,1,1,1]...
