const taskRepo = require('../repository/task.repository.ts');

/**
 * Returns Task's list by boardId
 * @param boardId - boar's id
 * @returns a board by id
 */
const getAllTasksService = async (boardId: string): Promise<object> => taskRepo.getAllTasksRepo(boardId);

/**
 * Returns a task by id from board by id
 * @param boardId - board's id
 * @param taskId - task's id
 * @returns a task by id from board by id
 */
const getOneTaskService = async (boardId: string, taskId: string): Promise<object> => taskRepo.getOneTaskRepo(boardId, taskId);

/**
 * Add a tack to board by id
 * @param boardId - board's id
 * @param task - object with task
 * @returns New tack
 */

const addTaskService = async (boardId: string, task: { id: string, boardId: string }): Promise<object> => taskRepo.addTaskRepo(boardId, task);

/**
 * Update a tack in the board by id
 * @param boardId - board's id
 * @param task - object with task
 * @param taskId - task's id
 * @returns Updated tack
 */

const updateTaskService = async (boardId: string, taskId: string, task: object): Promise<object> => taskRepo.updateTaskRepo(boardId, taskId, task);

/**
 * Delete a task by id in the board by id
 * @param boardId - user's id
 * @param taskId - task's id
 */

const deleteTaskService = async (boardId: string, taskId: string): Promise<void> => taskRepo.deleteTaskRepo(boardId, taskId);


module.exports = { getAllTasksService, getOneTaskService, addTaskService, updateTaskService, deleteTaskService};
