const taskRepo = require('../repository/task.repository.ts');

/**
 * Returns Task's list by boardId
 * @param boardId - boar's id
 * @returns a board by id
 */
const getAllTasksService = (boardId: string): object => taskRepo.getAllTasksRepo(boardId);

/**
 * Returns a task by id from board by id
 * @param boardId - board's id
 * @param taskId - task's id
 * @returns a task by id from board by id
 */
const getOneTaskService = (boardId: string, taskId: string): object => taskRepo.getOneTaskRepo(boardId, taskId);

/**
 * Add a tack to board by id
 * @param boardId - board's id
 * @param task - object with task
 * @returns New tack
 */

const addTaskService = (boardId: string, task: { id: string, boardId: string }): object => taskRepo.addTaskRepo(boardId, task);

/**
 * Update a tack in the board by id
 * @param boardId - board's id
 * @param task - object with task
 * @param taskId - task's id
 * @returns Updated tack
 */

const updateTaskService = (boardId: string, taskId: string, task: object): object => taskRepo.updateTaskRepo(boardId, taskId, task);

/**
 * Delete a task by id in the board by id
 * @param boardId - user's id
 * @param taskId - task's id
 */

const deleteTaskService = (boardId: string, taskId: string): void => taskRepo.deleteTaskRepo(boardId, taskId);


module.exports = { getAllTasksService, getOneTaskService, addTaskService, updateTaskService, deleteTaskService};
