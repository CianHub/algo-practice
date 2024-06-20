function swap(idx1, idx2, arr) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  // good candidate for when data is almost sorted
  // starting at the end loop through each el
  // by the end of each i iteration, arr[i] will be sorted
  for (let i = arr.length; i >= 0; i--) {
    let noSwaps = true;
    // j begins at the start of the array until the end e.g. when j === 0
    // each time i increments, the inner loop runs for 1 less element
    for (let j = 0; j < i - 1; j++) {
      // if the element at index j is larger than the next swap them
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([3, 5, 2, 1, 4]));
console.log(bubbleSort([30, 15, 22, 11, 402]));
console.log(bubbleSort([1, 2, 3, 5, 4]));
