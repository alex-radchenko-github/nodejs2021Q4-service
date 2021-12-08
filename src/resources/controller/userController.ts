const userService = require('../service/user.service.ts');

const getAllUsers = async () => userService.getAllUsersService().map((x: object) => userService.returnUserWithoutPass(x));



// @ts-ignore
const getOneUser = async (req) => {
    const {userId} = req.params;
    return userService.returnUserWithoutPass(userService.getOneUser(userId));
};

// @ts-ignore
const addUser = async (req, res) => {
    res.status(201);
    return userService.returnUserWithoutPass(userService.addUser(req.body));

};

// @ts-ignore
const updateUser = async (req, res) => {
    const {userId} = req.params;
    res.status(200);
    return userService.returnUserWithoutPass(userService.updateUser(userId, req.body));
};

// @ts-ignore
const deleteUser = async (req, res) => {
    const {userId} = req.params;
    res.status(204);
    return userService.deleteUser(userId);
};

module.exports = {
    getAllUsers,
    getOneUser,
    addUser,
    updateUser,
    deleteUser
}