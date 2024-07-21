function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let changes = false;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        changes = true;
      }
    }

    if (!changes) break;
  }

  return arr;
}

console.log(bubbleSort([5, 2, 4, 3, 1]));
