import {User} from "../../entity/user";

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config()



function generateAccessToken(id: string, login: string) {
    const payload = {
        id,
        login
    }
    return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "24h"})
}

/**
 * Add a new user
 * @param user - object with user parameters
 * @returns New user object with ID
 */


async function loginRepo(user: { login: string; password: string }) {

    const userCandidat = await User.findOne({login: user.login})

    const validPassword = bcrypt.compareSync(user.password, userCandidat.password)
    if (!validPassword) {
        return "password mistake"
    }
    return {token: generateAccessToken(userCandidat.id, userCandidat.login)}

}

module.exports = {
    loginRepo
};
