const winston = require('winston');
require('winston-daily-rotate-file');

const path = require('path');

const config = require('../config');

const logger = winston.createLogger({
    level: config.LOGS.LEVEL,
    format: winston.format.json(),
});

// Method used with Morgan to write logs with predefined streams
logger.stream = {
    write(message) {
        logger.info(message);
    },
};

if (config.ENV.NODE_ENV !== 'development') {
    // Write all logs with importance level of `error` or less to `error.log`
    logger.add(new winston.transports.DailyRotateFile({
        filename: '%DATE%-error',
        dirname: path.join(config.LOGS.PATH, 'error'),
        datePattern: 'DD-MM-YYYY-HH-mm-ss',
        maxSize: '20m',
        level: 'error',
        extension: '.log',
        maxFiles: config.LOGS.KEEP_INTERVAL,
    }));

    // Write all logs with importance level of `info` or less to `combined.log`
    logger.add(new winston.transports.DailyRotateFile({
        filename: '%DATE%-combined',
        dirname: path.join(config.LOGS.PATH, 'combined'),
        datePattern: 'DD-MM-YYYY-HH-mm-ss',
        maxSize: '20m',
        level: 'info',
        extension: '.log',
        maxFiles: config.LOGS.KEEP_INTERVAL,
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
