// @ts-ignore
const {v4: uuidv4} = require("uuid");

// @ts-ignore
const repo = require('./memory.repository.ts');

const getAll = () => repo.data.user;

const getOne = (userId: string) => repo.data.user.filter((x: { id: string; }) => x.id === userId)[0];

function addUserRepo(user: {id: number}) {
    const newUser = user;
    newUser.id = uuidv4();
    repo.data.user.push(newUser);
    return newUser;
}

function updateUserRepo(userId: string, body: object) {

    let userIndex: number = 0;
    for (let i = 0; i < repo.data.user.length; i += 1) {
        if (repo.data.user[i].id === userId) {
            userIndex = i;
            break;
        }
    }
    const updatedUser = {
        ...body,
        id: userId,
        password: repo.data.user[userIndex].password

    };
    repo.data.user[userIndex] = {...updatedUser};
    return updatedUser;
}

// @ts-ignore

function deleteUser(userId) {
    let userIndex = null;
    for (let i = 0; i < repo.data.user.length; i += 1) {
        if (repo.data.user[i].id === userId) {
            userIndex = i;
            break;
        }
    }

    repo.data.user.splice(userIndex, 1);

    for (let i = 0; i < repo.data.task.length; i += 1) {
        if (repo.data.task[i].userId === userId) {
            repo.data.task[i].userId = null
        }
    }


}

module.exports = {
    getAll,
    getOne,
    addUserRepo,
    updateUserRepo,
    deleteUser,
};
