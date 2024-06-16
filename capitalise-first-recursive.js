function capitalizeFirst(arr) {
  /*
  Write a recursive function called capitalizeFirst. 
  Given an array of strings, capitalize the first letter of each string in the array.
  */
  /*
  1 understand the problem
    1 rephrase -> capitalise 1st char of each el, return the array
    2 identify inputs -> array of strings
    3 identify outputs -> array of strings
    4 can we solve -> yes
    5 key data

  2 explore examples
  3 break it down
  4 solve/simplify
  5 refactor

  */
  // base case -> arr.length === 0 return arr
  if (arr.length === 0) return arr;
  arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [arr[0], ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
