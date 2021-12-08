const usersRepo = require('../repository/user.repository.ts');


const getAllUsersService = () => usersRepo.getAll();

const getOneUserService = (userId: string) => usersRepo.getOne(userId);

const addUserService = (user: object) => usersRepo.addUserRepo(user);

// @ts-ignore
const updateUser = (userId, body) => usersRepo.updateUser(userId, body);
// @ts-ignore
const deleteUser = (userId) => usersRepo.deleteUser(userId);
// @ts-ignore
function returnUserWithoutPass(user) {
    const { id, name, login } = user;
    return { id, name, login };
}

module.exports = { getAllUsersService, getOneUserService ,addUserService, returnUserWithoutPass, updateUser, deleteUser};
