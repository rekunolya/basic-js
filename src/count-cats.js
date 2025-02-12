const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0
  arr.map((el) => count += el.filter(elem => elem == '^^').length) 
  return count
}

module.exports = {
  countCats
};
