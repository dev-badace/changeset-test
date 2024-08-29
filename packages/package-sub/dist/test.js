const logger = require("package-core/dist/test");

logger.logger();

module.exports = {
  subLogger: () => {
    return logger.logger;
  },
};
