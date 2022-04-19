const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const logger = require('./logger');
const api = require('./api');

// Middlewares
const notFoundHanlder = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');
const rateLimiter = require('./middlewares/rateLimiter');
const authorization = require('./middlewares/authorization');

const app = express();

process.on('uncaughtException', (error) => {
    logger.error(error);
    process.exit(1);
});

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));

// Boddy parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rate limiting
app.use(rateLimiter);

// Authorization
app.use(authorization);

// Routes
app.use('/api', api);

// Error handling
app.use(notFoundHanlder);
app.use(errorHandler);

app.listen(config.API.PORT, () => logger.info(
    `Microservice started - listening on ${config.API.PORT}`,
));
