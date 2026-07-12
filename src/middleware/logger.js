const logger = (req, res, next) => {
  const time = new Date().toISOString();

  console.log(
    `[${time}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`
  );

  next();
};

module.exports = logger;