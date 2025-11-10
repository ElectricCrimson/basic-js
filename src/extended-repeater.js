const { NotImplementedError } = require('../lib');

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
  const obj = options;
  const repeat = obj.repeatTimes ? obj.repeatTimes : 1;
  const separator = obj.separator ? obj.separator : '+';
  const addition = obj.addition;
  const addRepeat = obj.additionRepeatTimes ? obj.additionRepeatTimes : 1;
  const addSeparator = obj.additionSeparator ? obj.additionSeparator : '|';

  let result = '';

  for (let i = 0; i < repeat; i++) {
    const sep = (i === repeat - 1) ? '' : separator;
    let add = '';

    if (addition !== undefined) {
      for (let j = 0; j < addRepeat; j++) {
        const addSep = (j === addRepeat - 1) ? '' : addSeparator;
        add += addition + addSep;
      }
    } else {
      add = '';
    }

    result += (str + add + sep);
  }

  return result;
}

module.exports = {
  repeater
};
