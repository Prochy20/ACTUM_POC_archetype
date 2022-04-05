const unauthorized = new Error('Unauthorized!');
unauthorized.code = 401;
unauthorized.timestamp = new Date();

module.exports = unauthorized;
