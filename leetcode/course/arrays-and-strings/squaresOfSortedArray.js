//Given an integer array nums sorted in non-decreasing order,
//return an array of the squares of each number sorted in non-decreasing order.

function squaresOfSortedArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  const newArr = [];

  while (left <= right) {
    let leftVal = arr[left];
    let rightVal = arr[right];

    if (leftVal < 0) leftVal = Math.abs(leftVal);
    if (rightVal < 0) rightVal = Math.abs(rightVal);

    if (leftVal > rightVal) {
      const sqr = leftVal * leftVal;
      newArr.unshift(sqr);
      left++;
    } else {
      const sqr = rightVal * rightVal;
      newArr.unshift(sqr);
      right--;
    }
  }

  return newArr;
}

console.log(squaresOfSortedArray([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(squaresOfSortedArray([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
