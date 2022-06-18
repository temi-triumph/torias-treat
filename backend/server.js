

const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors')
const env = require('dotenv').config();

const port  = process.env.PORT || 5000

const app = express();

/// initailizing mongodb connection
mongoose.connect(process.env.DB_CONN_STRING)
.then( () => {
  console.log("mongodb connected");
})

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.use("/login", require('./routes/authRoute'));








app.listen(port, () => console.log("Server started on port " + port ));












