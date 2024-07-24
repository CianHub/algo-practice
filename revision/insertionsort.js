function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    console.log("currentVal", currentVal);

    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;

      console.log(arr);
    }

    console.log("j + 1: ", j + 1);
    console.log("currentVal", currentVal);

    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([5, 2, 4, 3, 1]));
