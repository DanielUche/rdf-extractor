const winston = require('winston');

const { createLogger, transports } = winston;


const Logger = createLogger({
  format: winston.format.simple(),
  transports: [new transports.Console()]
});


module.exports = Logger;
