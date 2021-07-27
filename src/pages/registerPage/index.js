import axios from "axios";
import React, { useState } from "react";
import FormUserDetails from "../../components/userForm/formUserDetails";

const RegisterForm = () => {

    const [state, setstate] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        gender: "",
        fatherName: "",
        motherName: "",
        mobileNumber: "",
        // city: ""
    });

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        const response = await axios.post("http://localhost:5000/api/register", { values });
        console.log("res", response);
        setstate({
            ...state,
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            gender: "",
            fatherName: "",
            motherName: "",
            mobileNumber: "",
            // city: ""
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    };

    const { email,
        password,
        confirmPassword,
        firstName,
        lastName,
        gender,
        fatherName,
        motherName,
        mobileNumber,
        city } = state;

    const values = {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        gender,
        fatherName,
        motherName,
        mobileNumber,
        city
    };

    return (
        <FormUserDetails
            values={values}
            handleChange={handleChange}
            handelSubmit={handelSubmit}
        />
    )
};

export default RegisterForm;