const config = require('../config');
const logger = require('../logger');

/**
 * @typedef { import('express').Request } Request
 * @typedef { import('express').Response } Response
 * @typedef { import('express').NextFunction } Next
 */

/**
 * MW: Handles errors. Sends appropriate result to user + logs error
 * @param {Request} req request
 * @param {Response} res response
 * @param {Next} next next function
 * @param {Error} error error to be displayed
 */

// eslint-disable-next-line no-unused-vars
module.exports = (error, req, res, next) => {
    const {
        message = 'Internal server error',
        code = 500,
    } = error;

    logger.error(error.message, error);

    // Do not display error stack in production
    const stack = config.ENV.NODE_ENV !== 'development'
        ? ''
        : error.stack || '';

    res
        .status(code)
        .json({
            status: 'ERROR',
            error: {
                message,
                stack,
            },
            code,
        });
};
