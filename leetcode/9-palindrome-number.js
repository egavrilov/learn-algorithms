/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const original = x;
  let reversed = 0;
  if (x < 0) {
    x = -x;
  }

  while (x >= 1) {
    const next = x % 10;
    reversed = reversed * 10 + next;
    x = Math.floor(x / 10);
  }

  return original === reversed;
};
