const {v4: uuidv4ForTask} = require("uuid");

const memoryRepo = require('./memory.repository.ts');

/**
 * Returns Task's list by board id
 * @param brdId - board id
 * @returns Task's list by board id
 */
function getAllTasksRepo(brdId: string) {
    return memoryRepo.data.task.filter((x: { boardId: string; }) => x.boardId === brdId)
}


/**
 * Add a tack to board by id
 * @param boardId - board id
 * @param task - object with new task
 * @returns the new tack
 */
function addTaskRepo(boardId: string, task: { id: string, boardId: string }) {
    const newTask = task;
    newTask.id = uuidv4ForTask();
    newTask.boardId = boardId;
    memoryRepo.data.task.push(newTask);
    return newTask;
}

/**
 * Returns a task by id from board by id
 * @param boardId - board id
 * @param taskId - task  id
 * @returns a task by id from board by id
 */
function getOneTaskRepo(boardId: string, taskId: string) {

    return memoryRepo.data.task.filter((x: { boardId: string; id: string; }) => x.boardId === boardId && x.id === taskId)[0];
}

/**
 * Update a tack in the board by id
 * @param boardId - board id
 * @param taskId - task  id
 * @param task - object with an updated task
 * @returns Updated tack
 */
function updateTaskRepo(boardId: string, taskId: string, task: object) {

    let taskIndex = 0;
    for (let i = 0; i < memoryRepo.data.task.length; i += 1) {
        if (memoryRepo.data.task[i].boardId === boardId && memoryRepo.data.task[i].id === taskId) {
            taskIndex = i;
            break;
        }
    }
    const updatedBoard = {
        ...task,
        id: taskId,
        boardId

    };

    memoryRepo.data.task[taskIndex] = {...updatedBoard};
    return updatedBoard;
}

/**
 * Delete a task by id in the board by id
 * @param boardId - board id
 * @param taskId - task  id
 */
function deleteTaskRepo(boardId: string, taskId: string) {
    let taskIndex = null;
    for (let i = 0; i < memoryRepo.data.task.length; i += 1) {
        if (memoryRepo.data.task[i].boardId === boardId && memoryRepo.data.task[i].id === taskId) {
            taskIndex = i;
            break;
        }
    }

    memoryRepo.data.task.splice(taskIndex, 1);

}

module.exports = {
    getAllTasksRepo,
    addTaskRepo,
    getOneTaskRepo,
    updateTaskRepo,
    deleteTaskRepo
};
