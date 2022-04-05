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
