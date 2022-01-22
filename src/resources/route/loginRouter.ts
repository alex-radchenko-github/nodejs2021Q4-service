const loginController = require('../controller/loginController.ts');


const loginRoutes = [
    {
        method: 'POST',
        url: '/login',
        handler: loginController.loginUser
    }
]

module.exports = loginRoutes