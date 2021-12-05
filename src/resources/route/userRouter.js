const userController = require('../controller/userController.js');

const routes = [
    {
        method: 'GET',
        url: '/users',
        handler: userController.getAllUsers
    },
    {
        method: 'GET',
        url: '/users/:userId',
        handler: userController.getOneUser
    },
    {
        method: 'POST',
        url: '/users',
        handler: userController.addUser
    },
    {
        method: 'PUT',
        url: '/users/:userId',
        handler: userController.updateUser
    },
    {
        method: 'DELETE',
        url: '/users/:userId',
        handler: userController.updateUser
    }
]
module.exports = routes