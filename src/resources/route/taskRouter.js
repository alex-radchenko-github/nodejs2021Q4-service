const taskController = require('../controller/taskController.js');

const taskRoutes = [
    {
        method: 'GET',
        url: '/boards/:boardId/tasks',
        handler: taskController.getAllTasks
    },
    {
        method: 'GET',
        url: '/boards/:boardId/tasks/:taskId',
        handler: taskController.getOneTask
    },
    {
        method: 'POST',
        url: '/boards/:boardId/tasks',
        handler: taskController.addTask
    },
    {
        method: 'PUT',
        url: '/boards/:boardId/tasks/:taskId',
        handler: taskController.updateTask
    },
    {
        method: 'DELETE',
        url: '/boards/:boardId/tasks/:taskId',
        handler: taskController.deleteTask
    }
]
module.exports = taskRoutes