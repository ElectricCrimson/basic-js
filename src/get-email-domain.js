const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domainName = '';
  const index = email.lastIndexOf('@');

  for (let i = 0; i < email.length; i++) {
    if (i > index) {
      domainName += email.at(i);
    }
  }

  return domainName;
}

module.exports = {
  getEmailDomain
};
