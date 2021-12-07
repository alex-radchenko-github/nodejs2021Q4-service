// @ts-ignore
const usersRepo = require('../repository/task.repository.ts');

// @ts-ignore
const getAllTasks = (boardId) => usersRepo.getAllTasks(boardId);
// @ts-ignore
const getOneTask = (boardId, taskId) => usersRepo.getOneTask(boardId, taskId);
// @ts-ignore
const addTask = (boardId, task) => usersRepo.addTask(boardId, task);
// @ts-ignore
const updateTask = (boardId, taskId, task) => usersRepo.updateTask(boardId, taskId, task);
// @ts-ignore
const deleteTask = (boardId, taskId) => usersRepo.deleteTask(boardId, taskId);


module.exports = { getAllTasks, getOneTask, addTask, updateTask, deleteTask};
