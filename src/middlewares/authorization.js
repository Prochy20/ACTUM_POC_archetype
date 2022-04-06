const config = require('../config');
const unauthorizedError = require('../errors/unauthorized');

/**
 * @typedef { import('express').Request } Request
 * @typedef { import('express').Response } Response
 * @typedef { import('express').NextFunction } Next
 */

/**
 * MW: Checks if headers contain Authorization header + validates token
 * @param {Request} req request
 * @param {Response} res response
 * @param {Next} next next function
 */
module.exports = (req, res, next) => {
    const rawToken = req.get('Authorization');

    if (typeof rawToken !== 'undefined') {
        const [keyword, token] = rawToken.split(' ');
        if (keyword === 'Bearer' && token === config.API.TOKEN) {
            return next();
        }
    }

    return next(unauthorizedError);
};
