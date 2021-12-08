const {v4: uuidv4ForTask} = require("uuid");

const memoryRepo = require('./memory.repository.ts');

function getAllTasksRepo(brdId: string) {
    return memoryRepo.data.task.filter((x: { boardId: string; }) => x.boardId === brdId)
}

function addTaskRepo(boardId: string, task: { id: string, boardId: string }) {
    const newTask = task;
    newTask.id = uuidv4ForTask();
    newTask.boardId = boardId;
    memoryRepo.data.task.push(newTask);
    return newTask;
}

function getOneTaskRepo(boardId: string, taskId: string) {

    return memoryRepo.data.task.filter((x: { boardId: string; id: string; }) => x.boardId === boardId && x.id === taskId)[0];
}

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
