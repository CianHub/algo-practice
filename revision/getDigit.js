function getDigit(number, place) {
  let numberStr = `${number}`;

  return +numberStr[numberStr.length - 1 - place] || 0;
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));
