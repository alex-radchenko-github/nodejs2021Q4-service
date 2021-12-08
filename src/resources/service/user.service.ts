const usersRepo = require('../repository/user.repository.ts');


const getAllUsersService = () => usersRepo.getAll();

const getOneUserService = (userId: string) => usersRepo.getOne(userId);

const addUserService = (user: object) => usersRepo.addUserRepo(user);

const updateUserService = (userId: string, body: object) => usersRepo.updateUserRepo(userId, body);


const deleteUserService = (userId: string) => usersRepo.deleteUserRepo(userId);

function returnUserWithoutPass(user: { id: string; name: string; login: string; }) {
    const { id, name, login } = user;
    return { id, name, login };
}

module.exports = { getAllUsersService, getOneUserService ,addUserService, returnUserWithoutPass, updateUserService, deleteUserService};
