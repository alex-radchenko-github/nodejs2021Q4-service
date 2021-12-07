const taskService = require('../service/task.service.ts');

// @ts-ignore
const getAllTasks = async (req, res) => {
    const {boardId} = req.params;
    res.status(200);
    return taskService.getAllTasks(boardId);
}

// @ts-ignore
const getOneTask = async (req, res) => {
    const {boardId, taskId} = req.params;
    if (!taskService.getOneTask(boardId, taskId)) {
        res.status(404);
        return res.send('no ID');
    }
    res.status(200);
    return taskService.getOneTask(boardId, taskId);

};

// @ts-ignore
const addTask = async (req, res) => {
    const {boardId} = req.params;
    res.status(201);
    return taskService.addTask(boardId, req.body);
};

// @ts-ignore
const updateTask = async (req, res) => {
    const {boardId, taskId} = req.params;
    res.status(200);
    return taskService.updateTask(boardId, taskId, req.body);
};

// @ts-ignore
const deleteTask = async (req, res) => {
    const {boardId, taskId} = req.params;
    res.status(204);
    return taskService.deleteTask(boardId, taskId);
};

module.exports = {
    getAllTasks, getOneTask, addTask, updateTask, deleteTask
}