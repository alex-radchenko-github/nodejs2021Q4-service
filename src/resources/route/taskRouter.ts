const taskController = require('../controller/taskController.ts');

const getTasksByIdBoardValidation = {
    params: {
        boardId: {type: 'string', format: 'uuid'}
    }
}

const getTaskByIdBoardByIdTaskValidation = {
    params: {
        boardId: {type: 'string', format: 'uuid'},
        taskId: {type: 'string', format: 'uuid'}

    }
}

const addTaskValidation = {
    body: {
        type: 'object',
        additionalProperties: false,
        required: [
            'title',
            'order',
            'description'

        ],
        properties: {
            title: {type: 'string'},
            order: {type: 'number'},
            description: {type: 'string'},
            boardId: {type: 'string', format: 'uuid', nullable: true},
            columnId: {type: 'string', format: 'uuid', nullable: true},
            userId: {type: 'string', format: 'uuid', nullable: true}
        }
    }
}

const taskRoutes = [
    {
        method: 'GET',
        url: '/boards/:boardId/tasks',
        schema: getTasksByIdBoardValidation,
        handler: taskController.getAllTasks
    },
    {
        method: 'GET',
        url: '/boards/:boardId/tasks/:taskId',
        schema: getTaskByIdBoardByIdTaskValidation,
        handler: taskController.getOneTask
    },
    {
        method: 'POST',
        url: '/boards/:boardId/tasks',
        schema: addTaskValidation,
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