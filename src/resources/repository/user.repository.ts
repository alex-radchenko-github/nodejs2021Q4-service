// @ts-ignore
const {v4: uuidv4} = require("uuid");
// @ts-ignore
const usersRepo = require('./memory.repository.ts');

const getAll = () => usersRepo.data.user;

// @ts-ignore
const getOne = userId => usersRepo.data.user.filter(x => x.id === userId)[0];

// @ts-ignore
function addUser(user) {
    const newUser = user;
    newUser.id = uuidv4();
    usersRepo.data.user.push(newUser);
    return user;
}

// @ts-ignore
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
        // @ts-ignore
        password: usersRepo.data.user[userIndex].password

    };

    // @ts-ignore
    usersRepo.data.user[userIndex] = {...updatedUser};
    return updatedUser;
}
// @ts-ignore

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
