const rateLimit = require('express-rate-limit');
const config = require('../config/index');

module.exports = rateLimit({
    windowMs: config.API.RATE_LIMIT_WINDOW,
    max: config.API.RATE_LIMIT_MAX,
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
