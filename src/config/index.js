const dontenv = require('dotenv');

dontenv.config();

module.exports = {
    /**
     * @property {Object} API ENV Constants
     */
    API: {

        /**
         * @property {Number} PORT Port which should API listen on
         */
        PORT: Number(process.env.API_PORT) || 8055,

        /**
         * @property {Number} TOKEN Static authorization token for API
         */
        TOKEN: process.env.API_TOKEN,

        /**
         * @property {Number} RATE_LIMIT_WINDOW How long is a rate limit window (in ms)
         */
        RATE_LIMIT_WINDOW: process.env.RATE_LIMIT_WINDOW,

        /**
         * @property {Number} RATE_LIMIT_MAX Max ammount of req. per window
         */
        RATE_LIMIT_MAX: process.env.RATE_LIMIT_MAX,
    },

    /**
     * @property {Object} LOGS Logging settings
     */
    LOGS: {

        /**
         * @property {String} LOG_LEVEL Level of logging
         */
        LEVEL: process.env.LOG_LEVEL,

        /**
         * @property {Number} LOG_PATH Path to directory for saving the logs (relative to src)
         */
        PATH: process.env.LOG_PATH,

        /**
         * @property {String} How long to keep logs
         */
        KEEP_INTERVAL: process.env.LOG_KEEP_INTERVAL,
    },

    /**
     * @property {Object} APP Environment Constants
     */
    ENV: {

        /**
         * @property {String} NODE_ENV
         */
        NODE_ENV: process.env.NODE_ENV,
    },
};
