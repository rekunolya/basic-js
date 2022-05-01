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
  
  if(arr.length === 0) {
    return rez
  }
  let array = arr

  array.map(el => {
    if(el !== '--discard-prev' && el !== '--double-prev' && 
       el !== '--double-next' && el !== '--discard-next'){
      rez.push(el)
    }
  })
  
  if(array.length === rez.length) {
    return rez
  }
      
  if (arr[0] === '--discard-prev' || arr[0] === '--double-prev') {
    array = arr.slice(1)
    rez = array
    console.log('rez', rez)
    return rez
  }
  if (array[array.length-1] === '--double-next' 
      || array[array.length-1] === '--discard-next') {
        console.log('i m here')
    array = arr.slice(0, arr.length - 1)
    rez = array
    return rez
  }
  for (let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-prev') {
      array = arr.slice(0, i-1).concat(arr.slice(i+1))
      console.log('array', array)
      rez = array
    }
    if(arr[i] === '--discard-next') {
      array = arr.slice(0, i).concat(arr.slice(i+2))
      console.log('arrayNext', array)
      rez = array
    }
    if(arr[i] === '--double-prev') {
      array = arr.slice(0, i).concat(arr[i-1]).concat(arr.slice(i+1))
      console.log('arrayDoublePrev', array)
      rez = array
    }
    if(arr[i] === '--double-next') {
      array = arr.slice(0, i).concat(arr[i+1]).concat(arr.slice(i+1))
      console.log('arrayDoubleNext', array)
      rez = array
    }
  }
  console.log(array)
  console.log('rez', rez)
  return rez

 }
module.exports = {
  transform
};
