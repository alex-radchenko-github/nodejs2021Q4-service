import {getRepository} from 'typeorm'
import {User} from "../../entity/user";
import {Task} from "../../entity/task";


/**
 * Returns users list
 * @returns Users list
 */

async function getAll() {
    const userRepository = getRepository(User)
    return userRepository.find({select: ["id", "name", "login"]})
}

// const getAll =  (): object => repoForUser.data.user;

/**
 * Get a user by id
 * @param userId - user id
 * @returns a user by id
 */
// const getOne = (userId: string) => repoForUser.data.user.filter((x: { id: string; }) => x.id === userId)[0];
async function getOne(userId: string) {
    const userRepository = await getRepository(User)
    return userRepository.findOne({id: userId})

}

/**
 * Add a new user
 * @param user - object with user parameters
 * @returns New user object with ID
 */


async function addUserRepo(user: { login: string; password: string; name: string }) {
    const newUser = new User()
    newUser.login = user.login
    newUser.password = user.password
    newUser.name = user.name
    await newUser.save()
    return newUser

}

/**
 * Update a user by id
 * @param userId - user id
 * @param body - object with user parameters
 * @returns Updated user object with id
 */
async function updateUserRepo(userId: string, body: object) {

    const userRepository = await getRepository(User)

    await userRepository.update(userId, {
        ...body
    })
    return userRepository.findOneOrFail({id: userId}, {select: ["id", "name", "login"]})

}

/**
 * Return user without password
 * @param userid - user id
 */
async function deleteUserRepo(userid: string) {
    const aa = await getRepository(User).delete({id: userid})
    const tasksDeleteUser = await getRepository(Task).find(
        {
            where: {userId: userid}
        });
    for (let i = 0; i < tasksDeleteUser.length; i+=1) {

        // eslint-disable-next-line no-await-in-loop
        const userRepository = await getRepository(Task)
        await userRepository.update(tasksDeleteUser[i].id, {userId: null})

    }
    return aa


    // let userIndex = null;
    // for (let i = 0; i < repoForUser.data.user.length; i += 1) {
    //     if (repoForUser.data.user[i].id === userId) {
    //         userIndex = i;
    //         break;
    //     }
    // }
    //
    // repoForUser.data.user.splice(userIndex, 1);
    //
    // for (let i = 0; i < repoForUser.data.task.length; i += 1) {
    //     if (repoForUser.data.task[i].userId === userId) {
    //         repoForUser.data.task[i].userId = null
    //     }
    // }

}

module.exports = {
    getAll,
    getOne,
    addUserRepo,
    updateUserRepo,
    deleteUserRepo,
};
