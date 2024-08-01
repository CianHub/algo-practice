function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivot = arr[startIdx];
  let pivotIdx = startIdx;
  let originalPivotIdx = startIdx;

  for (let i = startIdx; i < endIdx + 1; i++) {
    if (arr[i] < pivot) {
      pivotIdx++;
      [[arr[i]], arr[pivotIdx]] = [[arr[pivotIdx]], arr[i]];
    }
  }

  [[arr[originalPivotIdx]], arr[pivotIdx]] = [
    [arr[pivotIdx]],
    arr[originalPivotIdx],
  ];

  return pivot;
}

console.log(pivot([7, 1, 30, 6, 5, 2, 9]));
