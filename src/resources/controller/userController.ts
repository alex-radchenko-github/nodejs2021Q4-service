const userService = require('../service/user.service.ts');

/**
 * Returns users list
 * @returns Users list
 */

const getAllUsers = async () => userService.getAllUsersService();

/**
 * Get a user by id
 * @param req - object with user id from server
 * @returns user by id
 */

const getOneUser = async (req: { params: { userId: string; }; }) => {
    const {userId} = req.params;
    console.log(userId)
    return userService.getOneUserService(userId);
};

/**
 * Add a new user
 * @param req - object with user parameters
 * @param res - server response
 * @returns New user object with ID
 * @returns 201 status code
 */
const addUser = async (req: { body: object; }, res: { status: (arg0: number) => void; }) => {

    res.status(201)
    return userService.addUserService(req.body);
};

/**
 * Update a user by id
 * @param req - server request
 * @param res - server response
 * @returns 200 status code
 * @returns Updated user object with id
 */
const updateUser = async (req: { params: { userId: string; }; body: object; }, res: { status: (arg0: number) => void; }) => {
    const {userId} = req.params;
    res.status(200);
    return userService.updateUserService(userId, req.body);
};

/**
 * Return user without password
 * @param req - server request
 * @param res - server response
 * @returns 204 status code
 */
const deleteUser = async (req: { params: { userId: string; }; }, res: { status: (arg0: number) => void; }) => {
    const {userId} = req.params;
    res.status(204);
    await userService.deleteUserService(userId);
};

module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser
}