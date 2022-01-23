import {User} from "../../entity/user";

const loginService = require('../service/login.service.ts');


/**
 * Add a new user
 * @param req - object with user parameters
 * @param res - server response
 * @returns New user object with ID
 * @returns 201 status code
 */
const loginUser = async (req: { body: { login: string; }; }, res: { status: (arg0: number) => void; }) => {

    const userCandidat = await User.findOne({login: req.body.login})
    if (!userCandidat) {
        res.status(403)
        return {message: "No User"}
    }

    res.status(201)
    return loginService.loginUserService(req.body);
};



module.exports = {
    loginUser
}