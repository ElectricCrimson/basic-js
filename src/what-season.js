const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    const str = 'Unable to determine the time of year!';
    return str;
  } else {
    if (date instanceof Date) {
      const month = date.getMonth();
      const season = (month <= 1 || month === 11) ? 'winter' : 
      month <= 4 ? 'spring' : month <= 7 ? 'summer' : 'autumn';
      return season;
    } else {
      throw new Error ('Invalid date!');
    }
  }
}

module.exports = {
  getSeason
};
