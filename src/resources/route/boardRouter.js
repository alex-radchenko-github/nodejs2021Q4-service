const boardController = require('../controller/boardController.js');

const getBoardValidation = {
    params: {
        boardId: {type: 'string', format: 'uuid'}
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                title: {type: 'string'},
                columns: {type: 'array'}
            }
        }
    }
}

const addBoardValidation = {
    body: {
        type: 'object',
        additionalProperties: false,
        required: [
            'title',
            'columns'
        ],
        properties: {
            title: { type: 'string' },
            columns: { type: 'array' }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                title: {type: 'string'},
                columns: {type: 'array'}
            }
        }
    }
}

const boardRoutes = [
    {
        method: 'GET',
        url: '/boards',
        handler: boardController.getAllBoards
    },
    {
        method: 'GET',
        url: '/boards/:boardId',
        schema: getBoardValidation,
        handler: boardController.getOneBoard
    },
    {
        method: 'POST',
        url: '/boards',
        schema: addBoardValidation,
        handler: boardController.addBoard
    },
    {
        method: 'PUT',
        url: '/boards/:boardId',
        handler: boardController.updateBoard
    },
    {
        method: 'DELETE',
        url: '/boards/:boardId',
        handler: boardController.deleteBoard
    }
]
module.exports = boardRoutes