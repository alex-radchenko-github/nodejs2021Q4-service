const usersRepo = require('../repository/user.repository.ts');

/**
 * Returns users list
 * @returns Users list
 */
const getAllUsersService = () => usersRepo.getAll();

/**
 * Get a user by id
 * @param userId - user's id
 * @returns get a user by id
 */

const getOneUserService = (userId: string) => usersRepo.getOne(userId);

/**
 * Add a new user
 * @param user - object with user parameters
 * @returns New user object with ID
 */
const addUserService = (user: object) => usersRepo.addUserRepo(user);

/**
 * Update a user by id
 * @param userId - user's id
 * @param body - object with a new user parameters
 * @returns Updated user object with
 */

const updateUserService = (userId: string, body: object) => usersRepo.updateUserRepo(userId, body);

/**
 * Delete a user by id
 * @param userId - user's id
 * @returns Delete a user by id
 */

const deleteUserService = (userId: string) => usersRepo.deleteUserRepo(userId);


/**
 * Return user without password
 * @param user - user's object
 * @returns User without password
 */

function returnUserWithoutPass(user: { id: string; name: string; login: string; }) {
    const { id, name, login } = user;
    return { id, name, login };
}

module.exports = { getAllUsersService, getOneUserService ,addUserService, returnUserWithoutPass, updateUserService, deleteUserService};
