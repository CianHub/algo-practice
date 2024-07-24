function mergeSortedArrays(arr1, arr2) {
  let mergedArr = [];

  let counter1 = 0;
  let counter2 = 0;

  while (counter1 < arr1.length && counter2 < arr2.length) {
    currentArr1Val = arr1[counter1];
    currentArr2Val = arr2[counter2];

    if (currentArr1Val <= currentArr2Val) {
      mergedArr.push(currentArr1Val);
      counter1++;
    }

    if (currentArr1Val > currentArr2Val) {
      mergedArr.push(currentArr2Val);
      counter2++;
    }
  }

  while (counter1 < arr1.length) {
    mergedArr.push(arr1[counter1]);
    counter1++;
  }

  while (counter2 < arr2.length) {
    mergedArr.push(arr2[counter2]);
    counter2++;
  }

  return mergedArr;
}

console.log(mergeSortedArrays([-1, 1, 2, 3, 7], [2, 4, 5, 45, 78]));
