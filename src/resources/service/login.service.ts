const loginRepo = require('../repository/login.repository.ts');


/**
 * Add a new user
 * @param user - object with user parameters
 * @returns New user object with ID
 */
const loginUserService = async (user: object) => loginRepo.loginRepo(user);



module.exports = { loginUserService };
