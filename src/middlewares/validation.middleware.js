// middlewares/validation.middleware.js

const { validateContactData } = require('../validators/contact.validator');

const validateContact = async (req, res, next) => {
  const data = req.body;

  const errors = await validateContactData(data);

  if (Object.keys(errors).length > 0) {
    return next({
      statusCode: 400,
      message: "Validation failed",
      errors: errors,
    });
  }

  next(); // Proceed to the next middleware or route handler
};

module.exports = {
  validateContact,
};