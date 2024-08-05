function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let mostDigits = 0;

  for (let i = 0; i < nums.length; i++)
    mostDigits = Math.max(mostDigits, digitCount(nums[i]));

  return mostDigits;
}

console.log(mostDigits([56, 1234, 7])); //4
console.log(mostDigits([1, 1, 11111, 1])); //5
console.log(mostDigits([12, 34, 78])); //2
