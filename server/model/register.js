const mongoose = require("mongoose");

const RegisterShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        require: true,
        unique: true
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
        unique: true
    },

});

const RegisterUser = new mongoose.model("Register", RegisterShema);

module.exports = RegisterUser;