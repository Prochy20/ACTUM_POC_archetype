const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const config = require('./config');
const logger = require('./logger');
const api = require('./api');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(api);

app.listen(config.API.PORT, () => logger.info(
    `Microservice started - listening on ${config.API.PORT}`,
    { module: 'main' },
    { error: 'test' },
));
