# ACTUM Microservice Archetype [POC] [WIP]

This project is meant to proof the concept of microservices architecture using an archetype as a basis for each particular microservice.

# Environment vars

This project uses the following environment variables:

| Name                          | Description                         |
| ----------------------------- | ----------------------------------- |
| API_PORT | Defines on which port will express app listen |
| API_TOKEN | Token used for authorization to API |
| RATE_LIMIT_MAX | Defines how many requests per time frame can be send|
| RATE_LIMIT_WINDOW | Defines rate limiting time frame (in ms)  |
| LOG_LEVEL | Defines logging level |
| LOG_PATH | Defines directory to which are logs saved (relative path to root) |
| LOG_KEEP_INTERVAL | Defines how log are logs kept untill they are overwritten (possible values: xh -> x Hours / ym -> y Minutes )
| NODE_ENV | Defines node envirionment :: Possible values: production/development|

## Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 14.18.0 or higher

## Getting started

- Clone the repository

```
git clone  git@github.com:Prochy20/ACTUM_POC_archetype.git <project_name>
```

- Install dependencies

```
cd <project_name>
yarn
```

- Run the project (in production mode)

```
yarn start
```

- Run the project (in development mode using nodemon)

```
yarn dev
```

Navigate to `http://localhost:8055` (port is set in Environment vars)

## Node + Express

The main purpose of this repository is to show a project setup and workflow for writing microservice.

### Styleguide

This project follows Airbnb JavaScript Style Guide ( see https://github.com/airbnb/javascript )

### Project Structure

The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **logs** | Default directory used for storing of the logs |
| **node_modules**         | Contains all  npm dependencies |
| **src**                  | Contains  source code of the solution |
| **src/api**      | Contains all available API routes |
| **src/api/v1/** | Contains v1 of available API routes |
| **src/config** | Contains application config (built on top of .env) |
| **src/errors** | Contains all available errors (reused in express middlewares) |
| **src/logger**              | Common logging instance to be used across your app. |
| **src/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes |
| src/service.js      | Main application entry point |

### NPM Dependencies

Following npm packages are used in project:

| Name | Description | Version |
|--------|----------------| --------- |
| [cors](https://www.npmjs.com/package/cors "cors") | Node.js CORS middleware  | ^2.8.5 |
| [dotenv](https://www.npmjs.com/package/dotenv "dotenv") | Loads environment variables from .env file | ^16.0.0 |
| [express](https://www.npmjs.com/package/express "express") | REST API Framework  | ^4.17.3 |
| [express-rate-limit](https://www.npmjs.com/package/express-rate-limit "express-rate-limit") | Basic IP rate-limiting middleware for Express. Use to limit repeated requests to public APIs. | ^6.3.0 |
| [helmet](https://www.npmjs.com/package/helmet "helmet") | A middleware which helps secure Express/Connect apps with various HTTP headers  | ^5.0.2 |
| [morgan](https://www.npmjs.com/package/morgan "morgan") | HTTP request logger middleware for node.js | ^1.10.0 |
| [winston](https://www.npmjs.com/package/winston "winston") | A popular logging library | ^3.7.2 |
| [winston-daily-rotate-file](https://www.npmjs.com/package/winston-daily-rotate-file "winston-daily-rotate-file") | A transport for winston which logs to a rotating file each day | ^4.6.1 |

Following npm packages are used in project as DEV dependencies:

| Name | Description | Version |
|--------|----------------| --------- |
| [eslint](https://www.npmjs.com/package/eslint "eslint") | An AST-based pattern checker for JavaScript | ^8.12.0 |
| [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base "eslint-config-airbnb-base") | Airbnb's base JS ESLint config, following our styleguide  | ^15.0.0 |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import "eslint-plugin-import") | This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.  | ^2.25.4
| [nodemon](https://www.npmjs.com/package/nodemon "nodemon") | Simple monitor script for use during development of a node.js app  | ^2.0.15 |
