const express = require("express");
const router = express.Router();
const validator = require("validator");
const bcrypt = require("bcryptjs");
const RegisterUser = require("../model/register");


// Register
router.post("/register", async (req, res) => {
    const {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        gender,
        fatherName,
        motherName,
        mobileNumber
    } = req.body.values;

    // Validation
    if (!email || !password || !confirmPassword || !firstName || !lastName || !gender || !fatherName || !motherName || !mobileNumber)
        return res.status(400).json({ errorMessage: "All fields are required..." });

    const emailValidate = validator.isEmail(email);
    if (!emailValidate)
        return res.status(400).json({
            errorMessage: "Enter valid email"
        });

    const passwordValidate = validator.isStrongPassword(password);
    if (!passwordValidate)
        return res.status(400).json({
            errorMessage: "password length atleast 8 character and must contain 1 lowercase, 1 uppercase, 1 number, 1 symbol."
        });

    if (password !== confirmPassword)
        return res.status(400).json({
            errorMessage: "password must be match",
        });

    if (!firstName)
        return res.status(400).json({
            errorMessage: "Enter Firstname",
        });

    if (!lastName)
        return res.status(400).json({
            errorMessage: "Enter Lastname",
        });

    if (!gender)
        return res.status(400).json({
            errorMessage: "Enter gender",
        });

    if (!fatherName)
        return res.status(400).json({
            errorMessage: "Enter Father's name",
        });

    if (!motherName)
        return res.status(400).json({
            errorMessage: "Enter Mother's name",
        });

    if (mobileNumber.length < 10)
        return res.status(400).json({
            errorMessage: "Enter 10 digit mobile number",
        });

    // Check email id is already exist or not
    const isExistemail = await RegisterUser.findOne({ email: email });
    if (isExistemail)
        return res
            .status(400)
            .json({ errorMessage: "This email is already exist. Please enter another email" });

    // hashing the pasword
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);
    const hashConfirmPassword = await bcrypt.hash(confirmPassword, salt);

    try {
        const RegisterUserData = await new RegisterUser({
            email: email,
            password: hashPassword,
            confirmPassword: hashConfirmPassword,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            fatherName: fatherName,
            motherName: motherName,
            mobileNumber: mobileNumber

        });
        const RegisterData = await RegisterUserData.save();
        res.status(201).send(RegisterData);
    } catch (error) {
        res.status(400).json({ success: false });
    }
});


// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body.values;
        const loginUser = await loginUser.findOne({ email: email });
        if (!loginUser)
            return res.status(500).json({
                errorMessage: "No account with this email has been registered",
            });
        const isMatch = await bcrypt.compare(password, loginUser.password);

        if (!isMatch)
            return res.status(400).json({
                errorMessage: "Your password / email not match , try again . ",
            });

        // JWt token generate
        const token = jwt.sign({ id: loginUser._id }, Secretkeys.secretTokenId);
        res.json({
            token,
            loginUser: {
                id: loginUser._id,
                name: loginUser.name,
                email: loginUser.email,
            },
        });
    } catch (error) {
        res.status(500).json({ errorMessage: "Internal server error." });
    }
});

module.exports = router;