const { body, validationResult } = require("express-validator");

const createComplaintValidation = [

    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required"),

    body("description")
        .trim()
        .notEmpty()
        .withMessage("Description is required"),

    body("category")
        .notEmpty()
        .withMessage("Category is required"),

    body("location")
        .trim()
        .notEmpty()
        .withMessage("Location is required")

];

const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    }

    next();

};

module.exports = {
    createComplaintValidation,
    validate
};