const taskRepo = require('../repository/task.repository.ts');

// @ts-ignore
const getAllTasks = (boardId) => taskRepo.getAllTasks(boardId);
// @ts-ignore
const getOneTask = (boardId, taskId) => taskRepo.getOneTask(boardId, taskId);
// @ts-ignore
const addTask = (boardId, task) => taskRepo.addTask(boardId, task);
// @ts-ignore
const updateTask = (boardId, taskId, task) => taskRepo.updateTask(boardId, taskId, task);
// @ts-ignore
const deleteTask = (boardId, taskId) => taskRepo.deleteTask(boardId, taskId);


module.exports = { getAllTasks, getOneTask, addTask, updateTask, deleteTask};
