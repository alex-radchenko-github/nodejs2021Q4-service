const usersRepo = require('../repository/user.repository.ts');

/**
 * Returns users list
 * @returns Users list
 */
const getAllUsersService = async () => usersRepo.getAll();

/**
 * Get a user by id
 * @param userId - user's id
 * @returns user by id
 */

const getOneUserService = async (userId: string) => usersRepo.getOne(userId);

/**
 * Add a new user
 * @param user - object with user parameters
 * @returns New user object with ID
 */
const addUserService = async (user: {id: string}) => usersRepo.addUserRepo(user);

/**
 * Update a user by id
 * @param userId - user's id
 * @param body - object with a new user parameters
 * @returns Updated user object with
 */

const updateUserService = async (userId: string, body: object) => usersRepo.updateUserRepo(userId, body);

/**
 * Delete a user by id
 * @param userId - user's id
 */

const deleteUserService = async (userId: string) => usersRepo.deleteUserRepo(userId);


/**
 * Return user without password
 * @param user - user's object
 * @returns User without password
 */


module.exports = { getAllUsersService, getOneUserService ,addUserService, updateUserService, deleteUserService};
