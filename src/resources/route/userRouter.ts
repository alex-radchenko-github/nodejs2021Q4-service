const userController = require('../controller/userController.ts');

const getUserValidation = {
    params: {
        userId: {type: 'string', format: 'uuid'}
    },
    response: {
        200: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                name: {type: 'string'},
                login: {type: 'string'}
            }
        }
    }
}


const addUserValidation = {
    body: {
        type: 'object',
        additionalProperties: false,
        required: [
            'name',
            'login',
            'password'
        ],
        properties: {
            name: {type: 'string'},
            login: {type: 'string'},
            password: {type: 'string'}
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                id: {type: 'string'},
                name: {type: 'string'},
                login: {type: 'string'}
            }
        }
    }
}

const userRoutes = [
    {
        method: 'GET',
        url: '/users',
        handler: userController.getAllUsers
    },
    {
        method: 'GET',
        url: '/users/:userId',
        schema: getUserValidation,
        handler: userController.getOneUser
    },
    {
        method: 'POST',
        url: '/users',
        schema: addUserValidation,
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
        handler: userController.deleteUser
    }
]

module.exports = userRoutes