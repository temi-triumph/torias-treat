const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

const ProductModel = require("../models/productModel");

const validateProduct = require("./validations/validateProduct")

//const User = require("../models/userModel");
//// Login in user
const save = async (req, res, next) => {
    validateProduct(req, res, next);

    try {

        const Product = new ProductModel(req.body);
        const result = await Product.save();

        res.json(result);

    } catch (error) {
        console.log(error.message);
        if (error === 'ValidationError') {
            next(createError(422, error.message));
            return;
        }
        next(error);
    }
}


module.exports = {
    save,
}


