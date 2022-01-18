const {v4: uuidv4} = require("uuid");
const repo = require('./memory.repository.js');

function getAllTasks(brdId) {
    return repo.data.task.filter(x => x.boardId === brdId)
}

function addTask(boardId, task) {
    const newTask = task;
    newTask.id = uuidv4();
    newTask.boardId = boardId;
    repo.data.task.push(newTask);
    return newTask;
}

function getOneTask(boardId, taskId) {

    return repo.data.task.filter(x => x.boardId === boardId && x.id === taskId)[0];
}

function updateTask(boardId, taskId, task) {

    let taskIndex = null;
    for (let i = 0; i < repo.data.task.length; i += 1) {
        if (repo.data.task[i].boardId === boardId && repo.data.task[i].id === taskId) {
            taskIndex = i;
            break;
        }
    }
    const updatedBoard = {
        ...task,
        id: taskId,
        boardId

    };

    repo.data.task[taskIndex] = {...updatedBoard};
    return updatedBoard;
}

function deleteTask(boardId, taskId) {
    let taskIndex = null;
    for (let i = 0; i < repo.data.task.length; i += 1) {
        if (repo.data.task[i].boardId === boardId && repo.data.task[i].id === taskId) {
            taskIndex = i;
            break;
        }
    }

    repo.data.task.splice(taskIndex, 1);

}

module.exports = {
    getAllTasks,
    addTask,
    getOneTask,
    updateTask,
    deleteTask
};
