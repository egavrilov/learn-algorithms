/**
 * @param {string} s
 * @return {number}
 */
const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const romanValues = [1, 5, 10, 50, 100, 500, 1000];
var romanToInt = function(s) {
  let result = 0;
  let curr = 0;
  let lastValue = 0;
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const currentValue = romanValues[romanNumerals.indexOf(currentChar)];
    // X -> I -> X
    if (!lastValue || lastValue < currentValue) {
      console.log(lastValue, 'is less than', currentValue);
      curr -= currentValue;
    } else {
      console.log(lastValue, 'is same or more than', currentValue);
      result += currentValue + curr;
      curr = 0;
    }
    lastValue = curr || currentValue;
  }
  return result;
};

console.log(romanToInt('XIX')); // 19
console.log(romanToInt('IVM')); // 989
