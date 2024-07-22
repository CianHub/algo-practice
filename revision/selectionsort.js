function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[smallestIdx];
    arr[smallestIdx] = temp;
  }

  return arr;
}

console.log(selectionSort([5, 2, 4, 3, 1]));
