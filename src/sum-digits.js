const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = String(n).split('');
  let arrSum = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += Number(arr[i]);
  }
  if (sum > 9) {
    arrSum = String(sum).split('');
    sum = 0;
    for (let j = 0; j < arrSum.length; j += 1) {
      sum += Number(arrSum[j]);
    }
  }
  return sum;

}

module.exports = {
  getSumOfDigits
};
