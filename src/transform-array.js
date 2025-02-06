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

if (arr.includes('--discard-next') && (arr.includes('--double-prev') || arr.includes('--discard-prev'))) {
    console.log('hello')
    for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--double-next' || (arr[i] === '--double-prev' || arr[i] === '--discard-prev')) {
            rez.pop();
            rez.pop()
    } else {
       rez.push(arr[i]) 
    }
    }
} else if (arr.includes('--double-next') && (arr.includes('--double-prev') || arr.includes('--discard-prev'))) {
    for(let i = 0; i < arr.length; i++){
        console.log('privet')
    if(arr[i] === '--double-next') {
            rez.push(arr[i +1])
    } else if (arr[i] === '--double-prev') {
        rez.push(arr[i-1])
    } else if (arr[i] === '--discard-prev') {
      rez.pop()
    } else {
       rez.push(arr[i]) 
    }
    }
} else {
    for (let i = 0; i < arr.length; i++) {
    //rez.push(arr[i])
    if (arr[i] === '--discard-prev' ) {
        rez.pop()
    } else {
        rez.push(arr[i])
    }
        if(arr[i] === '--discard-next') {
        rez.pop();
        //rez.pop();
       // rez.push(undefined)
    }
    if (arr[i] === '--double-prev') {
        if (arr[0] === '--double-prev') {
          rez.pop();
          continue;
        }
        rez.pop()
        rez.push(arr[i-1])
    }
    if (arr[i] === '--double-next') {
       if(arr[arr.length-1] === '--double-next') {
          rez.pop()
    } else {
       rez.push(arr[i+1]) 
    }
    }
}
}
console.log('rez', rez)
return rez;
 }
module.exports = {
  transform
};
