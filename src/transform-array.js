const { NotImplementedError } = require('../lib');

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
  let newArr = [];

  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  } else {
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      const prevElem = newArr[newArr.length - 1];
      const nextElem = arr[i + 1];

      switch(elem) {
        case '--discard-prev':
          if (i > 0) newArr.pop();
        break;
        case '--discard-next':
          if (i < newArr.length - 1) newArr.pop(nextElem);
        break;
        case '--double-prev':
          if (i > 0) newArr.push(prevElem);
        break;
        case '--double-next':
          if (i < arr.length - 1) newArr.push(nextElem);
        break;
        default:
          newArr.push(elem);
        break;
      }
    }
    return newArr;
  }
}

module.exports = {
  transform
};
