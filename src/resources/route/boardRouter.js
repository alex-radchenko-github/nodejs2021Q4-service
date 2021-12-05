const boardController = require('../controller/boardController.js');

const boardRoutes = [
    {
        method: 'GET',
        url: '/boards',
        handler: boardController.getAllBoards
    },
    {
        method: 'GET',
        url: '/boards/:boardId',
        handler: boardController.getOneBoard
    },
    {
        method: 'POST',
        url: '/boards',
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