const express = require('express');
const router = express.Router();

const { save} = require("../controllers/productController");

router.post("/", save);

// router.post("/user", getUser);



module.exports = router;