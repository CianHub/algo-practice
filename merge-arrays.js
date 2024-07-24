function mergeSortedArrays(arr1, arr2) {
  let mergedArr = [];

  let counter1 = 0;
  let counter2 = 0;

  while (counter1 < arr1.length || counter2 < arr2.length) {
    let currentArr1Val = arr1[counter1];
    let currentArr2Val = arr2[counter2];

    if (currentArr1Val !== undefined && currentArr2Val !== undefined) {
      if (currentArr1Val <= currentArr2Val) {
        mergedArr.push(currentArr1Val);
        counter1++;
      } else if (currentArr1Val > currentArr2Val) {
        mergedArr.push(currentArr2Val);
        counter2++;
      }
    } else if (!currentArr1Val) {
      mergedArr = [...mergedArr, ...arr2.slice(counter2)];
      counter2 = arr2.length;
    } else {
      mergedArr = [...mergedArr, ...arr1.slice(counter2)];
      counter1 = arr1.length;
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays([-1, 1, 2, 3, 7], [2, 4, 5, 45, 78]));
