const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let rez = 0
  let rezS1 = s1.split('')
  let rezS2 = s2.split('')
  let mySet = new Set(rezS1);

  for (var elem of mySet) {
  let count = rezS1.filter(el => el === elem).length
  let count1 = rezS2.filter(el => el === elem).length
  if (count > count1) {
    rez += count1
  }  else {
    rez += count
  }
 
  }
return rez
}
module.exports = {
  getCommonCharacterCount
};
