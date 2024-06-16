/*
Write a recursive function called capitalizeWords.
Given an array of words, return a new array containing each word capitalized.
*/

function capitaliseWords(arr) {
  // base case = arr.length === 0 return arr
  if (arr.length === 1) return [arr[0].toUpperCase()];
  // arr[0] = arr[0].toUpperCase()
  arr[0] = arr[0].toUpperCase();
  // return [arr[0], ...capitalizeWords(arr.slice(1))]
  return [arr[0], ...capitaliseWords(arr.slice(1))];
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitaliseWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
