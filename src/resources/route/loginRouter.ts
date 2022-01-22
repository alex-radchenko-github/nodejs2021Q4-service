const loginController = require('../controller/loginController.ts');

// const getUserValidation = {
//     params: {
//         userId: {type: 'string', format: 'uuid'}
//     },
//     response: {
//         200: {
//             type: 'object',
//             properties: {
//                 id: {type: 'string'},
//                 name: {type: 'string'},
//                 login: {type: 'string'}
//             }
//         }
//     }
// }


// const addUserValidation = {
//     body: {
//         type: 'object',
//         additionalProperties: false,
//         required: [
//             'name',
//             'login',
//             'password'
//         ],
//         properties: {
//             name: {type: 'string'},
//             login: {type: 'string'},
//             password: {type: 'string'}
//         }
//     },
//     response: {
//         201: {
//             type: 'object',
//             properties: {
//                 id: {type: 'string'},
//                 name: {type: 'string'},
//                 login: {type: 'string'}
//             }
//         }
//     }
// }

const loginRoutes = [
    {
        method: 'POST',
        url: '/login',
        // schema: addUserValidation,
        handler: loginController.loginUser
    }
]

module.exports = loginRoutes