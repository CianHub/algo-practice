function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
  return arr;
}

console.log(insertionSort([3, 5, 2, 1, 4]));
console.log(insertionSort([30, 15, 22, 11, 402]));
console.log(insertionSort([1, 2, 3, 5, 4]));
