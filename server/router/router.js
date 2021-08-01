const express = require("express");
const router = express.Router();
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SecretKey = require("../config/keys");
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
        dob,
        fatherName,
        motherName,
        mobileNumber
    } = req.body.values;

    // Validation
    if (!email && !password && !confirmPassword && !firstName && !lastName && !gender && !dob && !fatherName && !motherName && !mobileNumber)
        return res.status(400).json({ ErrorMsg: { errorMessage: "All fields are required..." } });

    const emailValidate = validator.isEmail(email);
    if (!emailValidate)
        return res.status(400).json({
            ErrorMsg: { emailError: "Enter valid email" }
        });

    const passwordValidate = validator.isStrongPassword(password);
    if (!passwordValidate)
        return res.status(400).json({
            ErrorMsg: {
                passwordError: "password length atleast 8 character and must contain 1 lowercase, 1 uppercase, 1 number, 1 symbol."
            }
        });

    if (password !== confirmPassword)
        return res.status(400).json({
            ErrorMsg: { confirmPasswordError: "password must be match" }
        });

    if (!firstName)
        return res.status(400).json({
            ErrorMsg: { firstNameError: "Enter a valid name" }
        });
    if (!lastName)
        return res.status(400).json({
            ErrorMsg: { lastNameError: "Enter a valid name" }
        });

    if (!gender)
        return res.status(400).json({
            ErrorMsg: { genderError: "Choose gender" }
        });

    if (!dob)
        return res.status(400).json({
            ErrorMsg: { dobError: "Enter your DOB" }
        });

    if (!fatherName)
        return res.status(400).json({
            ErrorMsg: { fatherNameError: "Enter a valid name" }
        });

    if (!motherName)
        return res.status(400).json({
            ErrorMsg: { motherNameError: "Enter a valid name" }
        });

    if (mobileNumber.length < 10)
        return res.status(400).json({
            ErrorMsg: { mobileError: "Enter 10 digit mobile number" }
        });

    // Check email id is already exist or not
    const isExistemail = await RegisterUser.findOne({ email: email });
    if (isExistemail)
        return res
            .status(400)
            .json({ ErrorMsg: { emailError: "This email is already exist. Please enter another email" } });

    // Pasword hashing
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
            dob: dob,
            fatherName: fatherName,
            motherName: motherName,
            mobileNumber: mobileNumber

        });
        const RegisterData = await RegisterUserData.save();
        res.status(200).send(RegisterData);
    } catch (error) {
        res.status(400).json({ success: false });
    }
});



// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body.values;
        const loginUser = await RegisterUser.findOne({ email: email });

        if (!loginUser)
            return res.status(500).json({
                ErrorMsg: { emailError: "No account with this email has been registered" },
            });

        const isPasswordMatch = await bcrypt.compare(password, loginUser.password);
        if (!isPasswordMatch)
            return res.status(400).json({
                ErrorMsg: { passwordError: "Your password/email not match , try again." },
            });

        // JWt token generate
        const token = jwt.sign({ id: loginUser._id }, SecretKey.seceretTokenId);
        res.status(200).json({
            token: token,
            id: loginUser._id
        });
    }
    catch (error) {
        res.status(500).json({ errorMessage: "Internal server error." });
    }
});



// Delete User
router.delete('/deleteaccount/:id', async (req, res) => {
    try {
        const deleteUser = await RegisterUser.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ message: "deleted user successfully." });
    } catch (error) {
        res.status(500).json({ errorMessage: "failed" });
    }
})

module.exports = router;