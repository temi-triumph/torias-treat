const jsonwebtoken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const Yup= require("yup");

const User  = require("../models/userModel");


const validateSigninForm =  require("./validations/validateSigninController")

//const User = require("../models/userModel");
//// Login in user
const login = asyncHandler( async (req, res) => {
    const {email, password} = req.body;
    validateSigninForm(req, res);

    const user = await User.findOne({email})

    if(user){
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email
            })
    }else{
        res.status(400);
        throw new Error("Invalid credentials. Please Try again");
    }
    res.status(201).json({
        _id: user.id
    })
})


//// get user credentials
const getUser = asyncHandler( async (req, res) => {
    res.json('admin');
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '100',
    })
}


module.exports = {
    login,
    getUser,
}


