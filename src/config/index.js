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
    },

    LOGS: {

        /**
         * @property {String} LEVEL Level of logging
         */
        LEVEL: process.env.LOG_LEVEL,

        /**
         * @property {Number} PATH Path to directory for saving the logs (should be relative to src)
         */
        PATH: process.env.LOG_PATH,
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
