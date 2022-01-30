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

}


/**
 * Add a tack to board by id
 * @param boardId - board id
 * @param task - object with new task
 * @returns the new tack
 */
async function addTaskRepo(boardId: string, task: object) {


    const newTask = await getRepository(Task).insert(task);

    const taskRepository = await getRepository(Task)

    await taskRepository.update(newTask.identifiers[0].id, {
        boardId
    })

    return getRepository(Task).findOne(newTask.identifiers[0].id);

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


}

/**
 * Delete a task by id in the board by id
 * @param board - board id
 * @param task - task  id
 */
async function deleteTaskRepo(board: string, task: string) {

    return getRepository(Task).delete({boardId: board, id: task})



}

module.exports = {
    getAllTasksRepo,
    addTaskRepo,
    getOneTaskRepo,
    updateTaskRepo,
    deleteTaskRepo
};
