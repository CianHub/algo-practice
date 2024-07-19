# Array

### What is an Array?

An array is a data structure that stores a collection of elements in a contiguous block of memory. Each element in the array is accessed by its index, which represents its position in the array. Arrays are commonly used to store and manipulate a fixed-size sequence of elements of the same type. They provide efficient random access to elements and support various operations such as insertion, deletion, and traversal.

### Key Algorithms for Solving Problems in Arrays

1. **Two Pointers Technique**: This technique involves using two pointers to traverse the array and solve problems that require comparing elements or finding a specific pattern. It is commonly used in problems involving arrays, strings, and linked lists.

The two pointers technique is a powerful algorithmic technique that involves using two pointers to solve problems that require comparing elements or finding a specific pattern in an array, string, or linked list. The two pointers can be used to traverse the array from left to right, right to left, or from both ends towards the middle.

```javascript
function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return null;
}
```

2. **Sliding Window Technique**: This technique involves using a window that slides across the array to solve problems that require finding a subarray or substring with a specific property. It is commonly used in problems involving arrays, strings, and sequences.

The sliding window technique is a powerful algorithmic technique that involves using a window that slides across the array to solve problems that require finding a subarray or substring with a specific property. The window can be of fixed size or variable size, and it can slide from left to right or from right to left.

```javascript
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
```

3. **Prefix Sum Technique**: This technique involves calculating the prefix sum of an array to solve problems that require finding the sum of subarrays or subranges. It is commonly used in problems involving arrays, sequences, and ranges.

The prefix sum technique is a powerful algorithmic technique that involves calculating the prefix sum of an array to solve problems that require finding the sum of subarrays or subranges. The prefix sum of an array is an array where the ith element represents the sum of the first i elements of the original array.

Imagine you have a list of numbers, like `[1, 2, 3, 4, 5]`. The prefix sum of this list would be another list where each element represents the sum of the numbers from the beginning of the original list up to that point.

So, for our example, the prefix sum would be `[1, 3, 6, 10, 15]`. The first element is the same as the first element in the original list. The second element is the sum of the first two elements in the original list. The third element is the sum of the first three elements, and so on.

The prefix sum technique is useful because it allows us to quickly calculate the sum of any subarray or subrange of the original list. Instead of iterating through the subarray and adding up each element, we can simply subtract the prefix sum of the starting index from the prefix sum of the ending index.

For example, if we want to find the sum of the subarray from index 1 to index 3 (inclusive) in our original list, we can calculate it as follows:

`Sum = PrefixSum[3] - PrefixSum[0] = 10 - 1 = 9`

By using the prefix sum technique, we can efficiently solve problems that involve finding the sum of subarrays or subranges in an array.

```javascript
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  let prefixSum = new Map();

  prefixSum.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (prefixSum.has(sum - k)) {
      count += prefixSum.get(sum - k);
    }

    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }

  return count;
}
```

4. **Binary Search Technique**: This technique involves using binary search to find an element in a sorted array efficiently. It is commonly used in problems involving arrays, strings, and sequences.

The binary search technique is a powerful algorithmic technique that involves using binary search to find an element in a sorted array efficiently. Binary search works by repeatedly dividing the search interval in half until the target element is found or the interval is empty.

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```

5. **Naive String Matching Technique**: This technique involves using naive string matching to find a pattern in a text efficiently. It is commonly used in problems involving strings, sequences, and substrings.

The naive string matching technique is a simple algorithm that compares the pattern with the text character by character to find a match. It starts by comparing the first character of the pattern with the first character of the text, and if they match, it proceeds to compare the next characters until the pattern is found or the text is exhausted.

```javascript
function naiveStringMatching(text, pattern) {
  let n = text.length;
  let m = pattern.length;
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && text[i + j] === pattern[j]) {
      j++;
    }
    if (j === m) {
      return i;
    }
  }
  return -1;
}
```

6. **Bubble Sort Technique**: This technique involves using bubble sort to sort an array in ascending or descending order. It is commonly used in problems involving arrays, strings, and sequences.

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

7. **Selection Sort Technique**: This technique involves using selection sort to sort an array in ascending or descending order. It is commonly used in problems involving arrays, strings, and sequences.

Selection sort is a simple sorting algorithm that repeatedly selects the minimum (or maximum) element from the unsorted portion of the array and swaps it with the first unsorted element.

```javascript
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
```

8. **Insertion Sort Technique**: This technique involves using insertion sort to sort an array in ascending or descending order. It is commonly used in problems involving arrays, strings, and sequences.

Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. It iterates over the input array and grows the sorted array behind it.

```javascript
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
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
```

9. **Merge Sort Technique**: This technique involves using merge sort to sort an array in ascending or descending order. It is commonly used in problems involving arrays, strings, and sequences.

Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts the two halves, and then merges the sorted halves.

```javascript
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
```

10. **Quick Sort Technique**: This technique involves using quick sort to sort an array in ascending or descending order. It is commonly used in problems involving arrays, strings, and sequences.

Quick sort is a divide-and-conquer algorithm that selects a pivot element from the array, partitions the array into two subarrays based on the pivot, and recursively sorts the subarrays.

```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
```

11. **Radix Sort Technique**: This technique involves using radix sort to sort an array in ascending or descending order. It is commonly used in problems involving arrays, strings, and sequences.

Radix sort is a non-comparative sorting algorithm that sorts the elements by processing individual digits of the numbers. It is based on the principle of sorting the elements by their radix (i.e., the base of the number system).

```javascript
function radixSort(arr) {
  let max = Math.max(...arr);
  let exp = 1;
  while (Math.floor(max / exp) > 0) {
    countingSort(arr, exp);
    exp *= 10;
  }
  return arr;
}
```

12. **Dynamic Programming Technique**: This technique involves using dynamic programming to solve problems that require finding an optimal solution by breaking it down into subproblems. It is commonly used in problems involving arrays, strings, and sequences.

Dynamic programming is a powerful algorithmic technique that involves solving complex problems by breaking them down into simpler subproblems. It uses memoization or tabulation to store the results of subproblems and avoid redundant computations.

```javascript
function fib(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```
