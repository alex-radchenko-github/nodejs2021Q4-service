const taskService = require('../service/task.service.ts');

/**
 * Returns Task's list by boardId
 * @param req - server request
 * @param res - server response
 * @returns 200 status code
 * @returns Task's list by boardId
 */
const getAllTasks = async (req: { params: { boardId: string; }; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(200);
    return taskService.getAllTasksService(boardId);
}

/**
 * Returns a task by id from board by id
 * @param req - server request
 * @param res - server response
 * @returns 200 status code if the task by id from board by is present
 * @returns a task by id from board by id
 * @returns 404 status code if the task by id from board by is not present
 */
const getOneTask = async (req: { params: { boardId: string; taskId: string; }; }, res: { status: (arg0: number) => void; send: (arg0: string) => void; }) => {

    // const {boardId, taskId} = req.params;
    // return taskService.getOneTaskService(boardId, taskId)

    const {boardId, taskId} = req.params;
    if (!await taskService.getOneTaskService(boardId, taskId)) {
        res.status(404);
        return res.send('no ID');
    }
    res.status(200);
    return taskService.getOneTaskService(boardId, taskId);

};


/**
 * Add a tack to board by id
 * @param req - server request
 * @param res - server response
 * @returns 201 status
 * @returns the new tack
 */
const addTask = async (req: { params: { boardId: string; }; body: object; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(201);
    return taskService.addTaskService(boardId, req.body);
};

/**
 * Update a tack in the board by id
 * @param req - server request
 * @param res - server response
 * @returns 200 status code
 * @returns Updated tack
 */
const updateTask = async (req: { params: { boardId: string; taskId: string; }; body: object; }, res: { status: (arg0: number) => void; }) => {
    const {boardId, taskId} = req.params;
    res.status(200);
    return taskService.updateTaskService(boardId, taskId, req.body);
};


/**
 * Delete a task by id in the board by id
 * @param req - server request
 * @param res - server response
 * @returns 204 status code
 */

const deleteTask = async (req: { params: { boardId: string; taskId: string; }; }, res: { status: (arg0: number) => void; }) => {
    const {boardId, taskId} = req.params;
    res.status(204);
    await taskService.deleteTaskService(boardId, taskId);
};

module.exports = {
    getAllTasks, getOneTask, addTask, updateTask, deleteTask
}