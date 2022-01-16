import {getRepository} from "typeorm";
import {Task} from "../../entity/task";



/**
 * Returns Task's list by board id
 * @param brdId - board id
 * @returns Task's list by board id
 */
async function getAllTasksRepo(brdId: string) {
    return getRepository(Task).find(
        {
            where: {boardId: brdId}
        });

    // return memoryRepo.data.task.filter((x: { boardId: string; }) => x.boardId === brdId)
}


/**
 * Add a tack to board by id
 * @param boardId - board id
 * @param task - object with new task
 * @returns the new tack
 */
async function addTaskRepo(boardId: string, task: object) {
    // console.log(task)
    // return boardId

    const newTask = await getRepository(Task).insert(task);

    const taskRepository = await getRepository(Task)

    await taskRepository.update(newTask.identifiers[0].id, {
        boardId
    })


    return getRepository(Task).findOne(newTask.identifiers[0].id);


    // const newUser = new User()
    // newUser.login = user.login
    // newUser.password = user.password
    // newUser.name = user.name
    // await newUser.save()
    // return newUser

    // const newTask = task;
    // newTask.id = uuidv4ForTask();
    // newTask.boardId = boardId;
    // memoryRepo.data.task.push(newTask);
    // return newTask;
}

/**
 * Returns a task by id from board by id
 * @param board - board id
 * @param task - task  id
 * @returns a task by id from board by id
 */
async function getOneTaskRepo(board: string, task: string) {

    const taskRepository = await getRepository(Task)
    return taskRepository.findOne({id: task})


    // return getRepository(Task).find(
    //     {
    //         where: {boardId: board, id: task}
    //     });


    // return memoryRepo.data.task.filter((x: { boardId: string; id: string; }) => x.boardId === boardId && x.id === taskId)[0];
}

/**
 * Update a tack in the board by id
 * @param boardId - board id
 * @param taskId - task  id
 * @param task - object with an updated task
 * @returns Updated tack
 */
async function updateTaskRepo(boardId: string, taskId: string, task: object) {

    const taskRepository = await getRepository(Task)

    await taskRepository.update(taskId, {
        ...task
    })
    return taskRepository.findOneOrFail({id: taskId})


    // let taskIndex = 0;
    // for (let i = 0; i < memoryRepo.data.task.length; i += 1) {
    //     if (memoryRepo.data.task[i].boardId === boardId && memoryRepo.data.task[i].id === taskId) {
    //         taskIndex = i;
    //         break;
    //     }
    // }
    // const updatedBoard = {
    //     ...task,
    //     id: taskId,
    //     boardId
    //
    // };
    //
    // memoryRepo.data.task[taskIndex] = {...updatedBoard};
    // return updatedBoard;
}

/**
 * Delete a task by id in the board by id
 * @param board - board id
 * @param task - task  id
 */
async function deleteTaskRepo(board: string, task: string) {

    return getRepository(Task).delete({boardId: board, id: task})



    // let taskIndex = null;
    // for (let i = 0; i < memoryRepo.data.task.length; i += 1) {
    //     if (memoryRepo.data.task[i].boardId === boardId && memoryRepo.data.task[i].id === taskId) {
    //         taskIndex = i;
    //         break;
    //     }
    // }
    //
    // memoryRepo.data.task.splice(taskIndex, 1);

}

module.exports = {
    getAllTasksRepo,
    addTaskRepo,
    getOneTaskRepo,
    updateTaskRepo,
    deleteTaskRepo
};
