// @ts-ignore
const usersRepo = require('../repository/user.repository.ts');

// @ts-ignore
const getAllUsers = () => usersRepo.getAll();
// @ts-ignore
const getOneUser = (userId) => usersRepo.getOne(userId);
// @ts-ignore
const addUser = (user) => usersRepo.addUser(user);
// @ts-ignore
const updateUser = (userId, body) => usersRepo.updateUser(userId, body);
// @ts-ignore
const deleteUser = (userId) => usersRepo.deleteUser(userId);
// @ts-ignore
function returnUserWithoutPass(user) {
    const { id, name, login } = user;
    return { id, name, login };
}

module.exports = { getAllUsers, getOneUser ,addUser, returnUserWithoutPass, updateUser, deleteUser};
