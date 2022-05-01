const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
 function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let rez = {turns: 0, seconds: 0}
  let turns = Math.pow(2, disksNumber) - 1
  console.log('turns', turns)
  let time = Math.floor((turns / turnsSpeed)*3600)
  console.log('time', time)
  rez.turns = turns;
  rez.seconds = time
  console.log('rez', rez)
  return rez
  
}

module.exports = {
  calculateHanoi
};
