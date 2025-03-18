// src/utils/response.js
function success(res, statusCode, message, data) {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

function error(res, statusCode, message, error) {
  res.status(statusCode).json({
    success: false,
    message,
    error: error ? error.message : null, 
  });
}

module.exports = {
  success,
  error,
};