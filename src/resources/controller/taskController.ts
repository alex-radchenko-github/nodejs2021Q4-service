const taskService = require('../service/task.service.ts');

const getAllTasks = async (req: { params: { boardId: string; }; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(200);
    return taskService.getAllTasksService(boardId);
}

const getOneTask = async (req: { params: { boardId: string; taskId: string; }; }, res: { status: (arg0: number) => void; send: (arg0: string) => void; }) => {
    const {boardId, taskId} = req.params;
    if (!taskService.getOneTaskService(boardId, taskId)) {
        res.status(404);
        return res.send('no ID');
    }
    res.status(200);
    return taskService.getOneTaskService(boardId, taskId);

};

const addTask = async (req: { params: { boardId: string; }; body: object; }, res: { status: (arg0: number) => void; }) => {
    const {boardId} = req.params;
    res.status(201);
    return taskService.addTaskService(boardId, req.body);
};

const updateTask = async (req: { params: { boardId: string; taskId: string; }; body: object; }, res: { status: (arg0: number) => void; }) => {
    const {boardId, taskId} = req.params;
    res.status(200);
    return taskService.updateTaskService(boardId, taskId, req.body);
};

const deleteTask = async (req: { params: { boardId: string; taskId: string; }; }, res: { status: (arg0: number) => void; }) => {
    const {boardId, taskId} = req.params;
    res.status(204);
    taskService.deleteTaskService(boardId, taskId);
};

module.exports = {
    getAllTasks, getOneTask, addTask, updateTask, deleteTask
}