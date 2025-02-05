const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;
  let string = '';
  let additionString = '';
  
  if(options.repeatTimes === undefined) {
    repeatTimes = 1;
  }
  if(options.additionRepeatTimes === undefined) {
    additionRepeatTimes = 1;
  }
  
  if (options.addition !== undefined) {
    for (let j = 0; j < additionRepeatTimes; j += 1) {
      if (options.additionSeparator !== undefined) {
        if(j != additionRepeatTimes -1) {
          additionString += options.addition + options.additionSeparator; 
       } else {
          additionString += options.addition;
       }
      } else {
        if(j != additionRepeatTimes -1) {
          additionString += options.addition + `|`; 
        } else {
          additionString += options.addition;
        }
      }
    }
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    if (options.separator !== undefined) {
      if (i !== repeatTimes-1) {
        string += str + additionString+ options.separator;
      } else {
        string += str + additionString;
      }
    } else {
        if (i !== repeatTimes-1) {
         string += str + additionString+ `+`;
        } else {
         string += str + additionString;
        }
    }
  }
  return string;
}

module.exports = {
  repeater
};
