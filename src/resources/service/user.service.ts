const usersRepo = require('../repository/user.repository.ts');

/**
 * Returns users list
 * @returns Users list
 */
const getAllUsersService = (): object => usersRepo.getAll();

/**
 * Get a user by id
 * @param userId - user's id
 * @returns user by id
 */

const getOneUserService = (userId: string): object => usersRepo.getOne(userId);

/**
 * Add a new user
 * @param user - object with user parameters
 * @returns New user object with ID
 */
const addUserService = (user: {id: string}): object => usersRepo.addUserRepo(user);

/**
 * Update a user by id
 * @param userId - user's id
 * @param body - object with a new user parameters
 * @returns Updated user object with
 */

const updateUserService = (userId: string, body: object): object => usersRepo.updateUserRepo(userId, body);

/**
 * Delete a user by id
 * @param userId - user's id
 */

const deleteUserService = (userId: string): void => usersRepo.deleteUserRepo(userId);


/**
 * Return user without password
 * @param user - user's object
 * @returns User without password
 */

function returnUserWithoutPass(user: { id: string; name: string; login: string; }): { name: string; id: string; login: string } {
    const { id, name, login } = user;
    return { id, name, login };
}

module.exports = { getAllUsersService, getOneUserService ,addUserService, returnUserWithoutPass, updateUserService, deleteUserService};
