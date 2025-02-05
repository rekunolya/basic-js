const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return "";
    
  let string = "";
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && str[i] === str[i + 1]) {
      count += 1;
    } else {
        if (count > 1) {
          string += count + str[i];
        } else {
            string += str[i];
        }
        count = 1; 
    }
  } 
  return string;
}

module.exports = {
  encodeLine
};
