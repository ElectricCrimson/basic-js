const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName;

  if (Array.isArray(members)) {
    const test = members.filter((name) => typeof name === 'string');
    
    if (!test) {
      teamName = false;
    } else {
      teamName = [];
      for (let name of test) {
        teamName.push(name.trim().slice(0, 1).toUpperCase());
      }
      teamName = teamName.sort().join('');
    }
  } else {
    teamName = false;
  }

  return teamName;
}

module.exports = {
  createDreamTeam
};
