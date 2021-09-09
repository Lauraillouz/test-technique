// Libraries
const expressValidator = require("express-validator");
const passwordValidator = require("password-validator");

const validation = () => {
  return [
    expressValidator
      .body("email")
      .isEmail()
      .withMessage("This email is not valid"),

    expressValidator
      .body("password")
      .custom((value) => {
        const schema = new passwordValidator();
        schema.is().min(8).has().lowercase().has().uppercase().has().digits(1);

        return schema.validate(value);
      })
      .withMessage(
        "The password must contain at least 8 characters, including at least: 1 lowercase, 1 uppercase and 1 digit"
      ),
    (req, res, next) => {
      const errors = expressValidator.validationResult(req);
      if (errors.isEmpty()) {
        return next();
      } else {
        res.json({
          status: errors.array(),
          message: "Form is invalid",
        });
      }
      next();
    },
  ];
};

module.exports = {
  validation,
};
