function averagePair(arr, targetAvg) {
  /*
  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
  */
  /*

1. understand the problem
    1.1 rephrase it = check if the avg of any combo of two elements in the sorted array is equal to the target
    1.2. idenfiy inputs = sorted array of integers + target number
    1.3 id outputs = boolean
    1.4 do we have enough info? = yes
    1.5 key data = rounded to 1, avg is ((x + y) / 2).toFixed(1) === `${targetAvg}`
2. explore examples
    averagePair([1,2,3],2.5) // true
    averagePair([1,3,3,5,6,7,10,12,19],8) // true
    averagePair([-1,0,3,4,5,6], 4.1) // false
    averagePair([],4) // false
3. break it down
4. solve simplify
5. refactor
*/
  // check array length < 2 if so return false
  if (arr.length < 2) return false;

  // multiple target by 2 to get sum pre division
  const sum = targetAvg * 2;

  //console.log("sum", sum);

  // init start pointer at 0 and end at end
  let start = 0;
  let end = arr.length - 1;

  // while start is smaller then end loop
  while (start < end) {
    //console.log("arr[end] - sum", arr[end] - sum);
    // if arr[end] - sum === arr[start] -> return true
    if (sum - arr[end] === arr[start]) return true;

    // if arr[end] - sum > arr[start] -> increment start
    if (sum - arr[end] > arr[start]) start++;

    // if arr[end] - sum < arr[start] -> decrement end
    if (sum - arr[end] < arr[start]) end--;
  }

  // return false after loop
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
