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
        city: ""
    });

    const handelSubmit = () => {
        console.log(values);
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
            city: ""
        });
    };

    const handleChange = (e) => {
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