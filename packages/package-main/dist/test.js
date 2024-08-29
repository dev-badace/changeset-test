const logger = require("package-core/dist/test");

logger.logger();

module.exports = {
  customLogger: () => {
    return logger.logger;
  },
};
