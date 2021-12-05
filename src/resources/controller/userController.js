const userService = require('../service/user.service.js');

const getAllUsers = async () => userService.getAllUsers().map(x => userService.returnUserWithoutPass(x));


const getOneUser = async (req) => {
    const {userId} = req.params;
    return userService.returnUserWithoutPass(userService.getOneUser(userId));
};

const addUser = async (req, res) => {
    res.status(201);
    return userService.returnUserWithoutPass(userService.addUser(req.body));

};

const updateUser = async (req, res) => {
    const {userId} = req.params;
    res.status(200);
    return userService.returnUserWithoutPass(userService.updateUser(userId, req.body));
};

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