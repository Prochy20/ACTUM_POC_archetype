const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');
const logger = require('./logger');
const api = require('./api');
const notFoundHanlder = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', api);
app.use(notFoundHanlder);
app.use(errorHandler);

app.listen(config.API.PORT, () => logger.info(
    `Microservice started - listening on ${config.API.PORT}`,
));
