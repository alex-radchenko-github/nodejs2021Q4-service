const {v4: uuidv4} = require("uuid");
const usersRepo = require('./memory.repository.js');

const getAll = () => usersRepo.data.user;

const getOne = userId => usersRepo.data.user.filter(x => x.id === userId)[0];

function addUser(user) {
    const newUser = user;
    newUser.id = uuidv4();
    usersRepo.data.user.push(newUser);
    return user;
}

function updateUser(userId, body) {

    let userIndex = null;
    for (let i = 0; i < usersRepo.data.user.length; i += 1) {
        if (usersRepo.data.user[i].id === userId) {
            userIndex = i;
            break;
        }
    }
    const updatedUser = {
        ...body,
        id: userId,
        password: usersRepo.data.user[userIndex].password

    };

    usersRepo.data.user[userIndex] = {...updatedUser};
    return updatedUser;
}

function deleteUser(userId) {
    let userIndex = null;
    for (let i = 0; i < usersRepo.data.user.length; i += 1) {
        if (usersRepo.data.user[i].id === userId) {
            userIndex = i;
            break;
        }
    }

    usersRepo.data.user.splice(userIndex, 1);

    for (let i = 0; i < usersRepo.data.task.length; i += 1) {
        if (usersRepo.data.task[i].userId === userId) {
            usersRepo.data.task[i].userId = null
        }
    }


}

module.exports = {
    getAll,
    getOne,
    addUser,
    updateUser,
    deleteUser,
};
