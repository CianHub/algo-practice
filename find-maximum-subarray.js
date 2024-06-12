function findMaxSlidingWindow(nums, w) {
  /*
    Given an integer array, nums, 
    find the maximum values in all the contiguous subarrays (windows) of size w.
*/
  /*
1. understand the problem
    1. rephrase the problem -> find the largest integer in each subarray of size w inside nums
    2. identify the inputs -> array of integers, integer for w
    3. identify the outputs -> array of integers
    4. do you have enough info to solve? yes
    5. summarise key info
2. explore examples
    findMaxSlidingWindow([1,2,3,4,5,6,7,8,9,10], 3) // [3, 4, 5, 6, 7, 8, 9, 10]
    findMaxSlidingWindow([4,5,6,1,2,3], 1) // [4,5,6,1,2,3]
    findMaxSliding([3,3,3,3,3,3,3,3,3,3], 4) // [3,3,3,3,3,3,3]

3. break it down
4. solve/simplify
5. refactor
*/
  // check if w = 1 or nums.length < 2 return nums
  if (w === 1 || nums.length < 2) return nums;
  // init results array
  const results = [];
  // init temp to -infinity
  let temp = -Infinity;
  // init start = 0
  let start = 0;

  // for loop from w to nums.length - 1
  for (let i = w - 1; i < nums.length; i++) {
    temp = -Infinity;
    // start = i - w
    start = i - w + 1;

    // for loop from start to i
    for (let j = start; j <= i; j++) {
      // if nums[j] > temp, temp = nums[j]
      if (nums[j] > temp) temp = nums[j];
    }

    console.log("start, end", start, i);
    console.log("window", nums.slice(start, i + 1));
    console.log("temp", temp);

    // push temp to results
    results.push(temp);
  }

  return results;
}

/*console.log(findMaxSlidingWindow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3, 4, 5, 6, 7, 8, 9, 10]
console.log(findMaxSlidingWindow([4, 5, 6, 1, 2, 3], 1)); // [4,5,6,1,2,3]
console.log(findMaxSlidingWindow([3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 4)); // [3,3,3,3,3,3,3]*/
console.log(
  findMaxSlidingWindow(
    [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67],
    3
  )
); // [10,9,23,23,34,56,67,67,67,-1,-2,9,10,34,67]

////////////////////////////////

function cleanUp(i, currentWindow, nums) {
  // remove all the indexes from currentWindow whose corresponding values
  // are smaller than or equal to the current element
  while (
    currentWindow.length !== 0 &&
    nums[i] >= nums[currentWindow[currentWindow.length - 1]]
  )
    currentWindow.pop();
}

function findMaxSlidingWindow(nums, w) {
  // if the length of input array is 1, return the input array
  if (nums.length === 1) {
    return nums;
  }

  // initializing variables
  const output = new Array(nums.length - w + 1);
  const currentWindow = [];

  // iterate over the first w elements
  for (let i = 0; i < w; i++) {
    cleanUp(i, currentWindow, nums);
    currentWindow.push(i);
  }

  // appending the maximum element of the current window to the output array
  output[0] = nums[currentWindow[0]];

  // iterate over the remaining input array
  for (let i = w; i < nums.length; i++) {
    // for every element, remove the previous smaller elements from currentWindow
    cleanUp(i, currentWindow, nums);

    // remove first index from the currentWindow if it has fallen out of the current window
    if (currentWindow.length !== 0 && currentWindow[0] <= i - w) {
      currentWindow.shift();
    }

    // append the index of the current element to currentWindow
    currentWindow.push(i);
    // adding the maximum element of the current window to the output list
    output[i - w + 1] = nums[currentWindow[0]];
  }

  // return the array containing output
  return output;
}
