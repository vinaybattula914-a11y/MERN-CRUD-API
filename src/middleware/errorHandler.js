const mongoose = require("mongoose");

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Invalid MongoDB ObjectId
  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      message: "Invalid Task ID",
    });
  }

  // Mongoose Validation Error
  if (err instanceof mongoose.Error.ValidationError) {
    const errors = Object.values(err.errors).map((error) => error.message);

    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors,
    });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};

module.exports = errorHandler;