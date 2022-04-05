const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const config = require('./config');
const logger = require('./logger');

const app = express();
app.use(helmet());
app.use(cors());

app.listen(config.API.PORT, () => logger.info(
    `Microservice started - listening on ${config.API.PORT}`,
    { module: 'main' },
    { error: 'test' },
));
