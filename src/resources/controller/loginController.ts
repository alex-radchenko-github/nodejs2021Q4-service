const loginService = require('../service/login.service.ts');


/**
 * Add a new user
 * @param req - object with user parameters
 * @param res - server response
 * @returns New user object with ID
 * @returns 201 status code
 */
const loginUser = async (req: { body: object; }, res: { status: (arg0: number) => void; }) => {

    res.status(201)
    return loginService.loginUserService(req.body);
};



module.exports = {
    loginUser
}