function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  if (nums.length === 1) return digitCount(nums[0]);
  let mostDigits = digitCount(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    let currentDigitCount = digitCount(nums[i]);
    if (mostDigits < currentDigitCount) mostDigits = currentDigitCount;
  }
  return mostDigits;
}

console.log(mostDigits([56, 1234, 7])); //4
console.log(mostDigits([1, 1, 11111, 1])); //5
console.log(mostDigits([12, 34, 78])); //2
