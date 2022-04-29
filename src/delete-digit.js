const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
   // remove line with error and write your code here


let rez = String(n).split('')
let arr = []
let array = []


console.log('rez', rez)
for (let i = 0; i < rez.length; i++){
  arr = Number(rez.slice(0, i).join('') + rez.slice(i+1).join(''))
  array.push(arr)
}

return Math.max.apply(null, array)
 }

module.exports = {
  deleteDigit
};
