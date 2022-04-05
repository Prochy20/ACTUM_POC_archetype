const winston = require('winston');
const path = require('path');

const config = require('../config');

const timestamp = new Date();

const logger = winston.createLogger({
    level: config.LOGS.LEVEL,
    format: winston.format.json(),
    defaultMeta: { module: 'main' },
});

if (config.ENV.NODE_ENV !== 'development') {
    // Write all logs with importance level of `error` or less to `error.log`
    logger.add(new winston.transports.File({
        filename: path.join(config.LOGS.PATH, 'error', `${timestamp}_error.log`),
        level: 'error',
    }));

    // Write all logs with importance level of `info` or less to `combined.log`
    logger.add(new winston.transports.File({
        filename: path.join(config.LOGS.PATH, 'combined', `${timestamp}_combined.log`),
    }));
}

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (config.ENV.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger;
