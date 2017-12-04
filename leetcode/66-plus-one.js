/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const result = [];
  let plus = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum =  digits[i] + plus;
    const digit = sum % 10;
    plus = Math.floor(sum / 10);
    result.unshift(digit);
  }
  if (plus !== 0) {
    result.unshift(plus);
  }

  return result;
};
