const {v4: uuidv4ForUser} = require("uuid");

const repoForUser = require('./memory.repository.ts');

const getAll =  (): object => repoForUser.data.user;

const getOne = (userId: string) => repoForUser.data.user.filter((x: { id: string; }) => x.id === userId)[0];

function addUserRepo(user: {id: string}): object {
    const newUser = user;
    newUser.id = uuidv4ForUser();
    repoForUser.data.user.push(newUser);
    return newUser;
}

function updateUserRepo(userId: string, body: object): object {

    let userIndex: number = 0;
    for (let i = 0; i < repoForUser.data.user.length; i += 1) {
        if (repoForUser.data.user[i].id === userId) {
            userIndex = i;
            break;
        }
    }
    const updatedUser = {
        ...body,
        id: userId,
        password: repoForUser.data.user[userIndex].password

    };
    repoForUser.data.user[userIndex] = {...updatedUser};
    return updatedUser;
}

function deleteUserRepo(userId: string): void {
    let userIndex = null;
    for (let i = 0; i < repoForUser.data.user.length; i += 1) {
        if (repoForUser.data.user[i].id === userId) {
            userIndex = i;
            break;
        }
    }

    repoForUser.data.user.splice(userIndex, 1);

    for (let i = 0; i < repoForUser.data.task.length; i += 1) {
        if (repoForUser.data.task[i].userId === userId) {
            repoForUser.data.task[i].userId = null
        }
    }


}

module.exports = {
    getAll,
    getOne,
    addUserRepo,
    updateUserRepo,
    deleteUserRepo,
};
