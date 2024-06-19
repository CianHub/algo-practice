function swap(idx1, idx2, arr) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function bubbleSort(arr) {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(j, j + 1, arr);
    }
  }

  return arr;
}

console.log(bubbleSort([3, 5, 2, 1, 4]));
console.log(bubbleSort([30, 15, 22, 11, 402]));
