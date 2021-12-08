const taskRepo = require('../repository/task.repository.ts');

const getAllTasksService = (boardId: string) => taskRepo.getAllTasksRepo(boardId);

const getOneTaskService = (boardId: string, taskId: string) => taskRepo.getOneTaskRepo(boardId, taskId);

const addTaskService = (boardId: string, task: string) => taskRepo.addTaskRepo(boardId, task);

const updateTaskService = (boardId: string, taskId: string, task: object) => taskRepo.updateTaskRepo(boardId, taskId, task);

const deleteTaskService = (boardId: string, taskId: string) => taskRepo.deleteTaskRepo(boardId, taskId);


module.exports = { getAllTasksService, getOneTaskService, addTaskService, updateTaskService, deleteTaskService};
