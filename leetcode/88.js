/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. 

To accommodate this, nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. 

nums2 has a length of n.

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

/*
1. Understand the problem
    1. Rephrase
    merge num1 and num2 while preserving their order inside of num1, num1 has been padded with zeros to be long enough for final result
    2. Identify inputs
    3. Identify outputs
    4. Can we solve
    5. Key data
2. Explore examples
3. Break it down
4. Solve
5. Refactor
*/

function merge(nums1, m, nums2, n) {
  // short circuit: nums2 length === 0  return nums1
  if (n === 0) return nums1;

  let p1 = 0;
  let p2 = 0;

  while (p2 < n) {
    // if nums2 el > nums1 el
    if (nums1[p1] < nums2[p2]) {
      // if not 0 then move nums1 to next element as already sorted
      if (nums1[p1] !== 0) p1++;
      // if it is 0, check that its not padding otherwise its already sorted
      else if (nums1[p1] === 0 && p1 < m) p1++;
    }

    // if nums1 el > nums2 el
    if (nums1[p1] >= nums2[p2]) {
      // means not sorted
      // insert nums2 el in nums1 slot
      nums1.splice(p1, 0, nums2[p2]);
      // account for increase in nums1 length
      // this means code can still detect if 0 are padding or not
      // also used to trim any remaining padding at the end
      m++;
      // move to the next el in nums2
      p2++;
    }
    // if its a padding 0
    else if (nums1[p1] === 0 && p1 >= m) {
      // just replace it
      nums1[p1] = nums2[p2];
      // move both pointers along
      p1++;
      p2++;
      // account for increase in nums1 length
      m++;
    }
  }

  // trim any remaining padding 0s
  while (nums1.length > m) nums1.pop();

  // return mutated nums1 array
  return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
//[1,2,2,3,5,6]
console.log(merge([1], 1, [], 0));
//[1]
console.log(merge([0], 0, [1], 1));
//[1]
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));
//[-1,0,0,1,2,2,3,3,3]
console.log(merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5));
//[-1,0,0,1,2,3,3]
