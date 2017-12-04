/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const sign =  x < 0 ? '-' : '';
  const reversed = String(Math.abs(x))
    .split('')
    .reverse()
    .join('');
  const result = Number(sign + reversed);

  const maxInt32 = Math.pow(2, 31) - 1;
  if (Math.abs(result) > maxInt32) { return 0; }

  return result;
};
