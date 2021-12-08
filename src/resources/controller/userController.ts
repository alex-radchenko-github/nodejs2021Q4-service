const userService = require('../service/user.service.ts');

const getAllUsers = async () => userService.getAllUsersService().map((x: object) => userService.returnUserWithoutPass(x));



const getOneUser = async (req: { params: { userId: string; }; }) => {
    const {userId} = req.params;
    return userService.returnUserWithoutPass(userService.getOneUserService(userId));
};

const addUser = async (req: { body: object; }, res: { status: (arg0: number) => void}) => {
    res.status(201)
    return userService.returnUserWithoutPass(userService.addUserService(req.body));
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