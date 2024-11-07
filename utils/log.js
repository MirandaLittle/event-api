import winston from 'winston';

const logger = winston.createLogger({
  level: 'info', // logger will log all messages with a severity of 'info' and above
  format: winston.format.json(), // all log messages will be output as JSON
  defaultMeta: { service: 'events-api' }, //add some default metadata to all log messages. In this case, every log message will include `{ service: 'bookstore-api' }` in its metadata.
});

if (process.env.NODE_ENV !== 'production') { //if not in production phase
  logger.add(new winston.transports.Console({ // logs will be output in console of the TERMINAL
    format: winston.format.simple(), // logs will be output in a simple, human-readable format rather than as JSON
  }));
}

export default logger