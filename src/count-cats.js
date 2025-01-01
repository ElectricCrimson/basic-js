const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const arr = matrix.flat();
  let countCats = 0;
  for (let elem of arr) {
    if (elem === '^^') {
      countCats += 1;
    }
  }
  return countCats;
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
