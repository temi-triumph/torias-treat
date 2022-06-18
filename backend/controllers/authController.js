const jsonwebtoken = require("jsonwebtoken");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const Yup= require("yup");


const validateSigninForm =  require("./validations/validateSigninController")



//const User = require("../models/userModel");
//// Login in user
const login = asyncHandler( async (req, res) => {
    const {email, password} = req.body;
    validateSigninForm(req, res);
})


//// get user credentials
const getUser = asyncHandler( async (req, res) => {
    res.json('admin');
})



module.exports = {
    login,
    getUser,
}


