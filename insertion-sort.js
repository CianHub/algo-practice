function swap(idx1, idx2, arr) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function insertionSort(arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j <= i; j++) if (arr[i] < arr[j]) swap(i, j, arr);

  return arr;
}

console.log(insertionSort([3, 5, 2, 1, 4]));
console.log(insertionSort([30, 15, 22, 11, 402]));
console.log(insertionSort([1, 2, 3, 5, 4]));
