const mongoose = require("mongoose");

const RegisterShema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmPassword: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    fatherName: {
        type: String,
        require: true
    },
    motherName: {
        type: String,
        require: true
    },
    mobileNumber: {
        type: Number,
        require: true,
    },

});

const RegisterUser = mongoose.model("Register", RegisterShema);

module.exports = RegisterUser;