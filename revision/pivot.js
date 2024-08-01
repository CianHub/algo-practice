function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivot = arr[startIdx];
  let pivotIdx = startIdx;

  for (let i = startIdx; i < endIdx + 1; i++) {
    if (arr[i] < pivot) {
      pivotIdx++;
      [[arr[i]], arr[pivotIdx]] = [[arr[pivotIdx]], arr[i]];
    }
  }

  [[arr[start]], arr[pivotIdx]] = [[arr[pivotIdx]], arr[start]];

  return pivot;
}

console.log(pivot([7, 1, 30, 6, 5, 2, 9]));
