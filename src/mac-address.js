const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const macLength = 17;
  const lastLetter = 'F';
  let isMac;

  if (n.length > macLength) {
    isMac = false;
  } else {
    for (let i = 0; i < n.length; i++) {
      if (n[i].charCodeAt() > lastLetter.charCodeAt()) {
        isMac = false;
        break;
      } else {
        isMac = true;
      }
    }
  }

  return isMac;
}

module.exports = {
  isMAC48Address
};
