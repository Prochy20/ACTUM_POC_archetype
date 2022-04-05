const notFoundError = require('../errors/notFound');

module.exports = (req, res, next) => {
    next(notFoundError);
};
