const notFoundError = require('../errors/notFound');

/**
 * @typedef { import('express').Request } Request
 * @typedef { import('express').Response } Response
 * @typedef { import('express').NextFunction } Next
 */

/**
 * MW: If reached, creates notFound error and propagates it to error handler
 * @param {Request} req request
 * @param {Response} res response
 * @param {Next} next next function
 */

module.exports = (req, res, next) => {
    next(notFoundError);
};
