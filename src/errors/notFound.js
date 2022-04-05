const notFound = new Error('Route not found!');
notFound.code = 404;
notFound.timestamp = new Date();

module.exports = notFound;
