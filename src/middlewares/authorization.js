const config = require('../config');
const unauthorizedError = require('../errors/unauthorized');

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
