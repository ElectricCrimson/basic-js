const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
// throw new NotImplementedError('Not implemented');
function dateSample(sampleActivity) {
  let result;

  if (typeof sampleActivity !== 'string') {
    result = false;
  } else {
    if (!Number(sampleActivity)) {
      result = false;
    } else {
      const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD));
      if (age >= 0) {
        result = age;
      } else {
        result = false;
      }
    }
  }

  return result;
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
