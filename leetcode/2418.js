/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

Constraints:

n == names.length == heights.length
1 <= n <= 103
1 <= names[i].length <= 20
1 <= heights[i] <= 105
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.
*/

function sortPeopleBubbleSort(names, heights) {
  function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  }

  for (let i = 0; i < names.length; i++) {
    let doSwap = false;

    for (let j = names.length - 1; j > i; j--) {
      if (heights[j] > heights[j - 1]) {
        swap(heights, j, j - 1);
        swap(names, j, j - 1);
        doSwap = true;
      }
    }

    if (!doSwap) break;
  }

  return names;
}

function sortPeopleSelectionSort(names, heights) {
  function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
  }

  for (let i = 0; i < names.length; i++) {
    let largest = i;

    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] > heights[largest]) {
        largest = j;
      }
    }

    if (i !== largest) {
      swap(heights, i, largest);
      swap(names, i, largest);
    }
  }

  return names;
}

console.log("With Bubble Sort: \n");
console.log(sortPeopleBubbleSort(["Mary", "John", "Emma"], [180, 165, 170])); //["Mary","Emma","John"]
console.log(sortPeopleBubbleSort(["Alice", "Bob", "Bob"], [155, 185, 150])); //["Bob","Alice","Bob"]
console.log(" \n");

console.log("With Selection Sort: \n");
console.log(sortPeopleSelectionSort(["Mary", "John", "Emma"], [180, 165, 170])); //["Mary","Emma","John"]
console.log(sortPeopleSelectionSort(["Alice", "Bob", "Bob"], [155, 185, 150])); //["Bob","Alice","Bob"]
