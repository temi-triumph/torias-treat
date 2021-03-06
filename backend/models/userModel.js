const mongoose = require('mongoose');
const schema  = mongoose.Schema;

const userSchema = new schema({
    name: {
        type: String,
       required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true, 
    },
    role : {
        type: String,
    },

}, {
    timestamps: true
});


const User = mongoose.model('user', userSchema);

module.exports = User;