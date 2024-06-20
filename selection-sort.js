function swap(idx1, idx2, arr) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    let noSwaps = true;

    while (noSwaps) {
      for (let j = i; j < arr.length; j++)
        minIdx = arr[j] < arr[minIdx] ? j : minIdx;

      minIdx !== i ? swap(i, minIdx, arr) : (noSwaps = false);
    }
  }

  return arr;
}

console.log(selectionSort([3, 5, 2, 1, 4]));
console.log(selectionSort([30, 15, 22, 11, 402]));
console.log(selectionSort([1, 2, 3, 5, 4]));
