const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
let rez = []
if(!Array.isArray(arr)) {
  throw new Error("'arr' parameter must be an instance of the Array!")
}

if(arr.length == 0) {
  return rez
}
let array = arr
array.map(el => {
  console.log(el)
  if(el !== '--discard-prev' || el !== '--double-prev' || el !== '--double-next' || el !== '--discard-next'){
    rez.push(el)
  }
})

if(array.length === rez.length) {
  return rez
}
    for (let i = 0; i < array.length; i++) {
      if (array[0] == '--discard-prev' || array[0] == '--double-prev') {
        rez.push(array.splice(0,1))
        return rez
      }
      if (array[array.length-1] == '--double-next' || array[array.length-1] == '--discard-next') {
        rez.push(arr.splice(-1,1))
        return rez
      }
      // if (arr[i] == '--discard-next'){
      //   rez.push(arr.splice(arr[i], 1 ))
      //   return rez
      // }
    }

}

module.exports = {
  transform
};
