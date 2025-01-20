const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0;
  let arr = [];
  let tempArr = [];
  
  for(let i = 0; i < matrix.length; i += 1) {
    tempArr = []
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (i === 0) {
        res += matrix[i][j];
      } else if (!arr.includes(j)) {
        res += matrix[i][j]; 
        }
      if (matrix[i][j] === 0) {
        tempArr.push(j);
      }
    }
    arr = tempArr;
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
