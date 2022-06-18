const express = require('express');
const router = express.Router();

const { login, getUser} = require("../controllers/authController");

router.post("/", login);

// router.post("/user", getUser);



module.exports = router;