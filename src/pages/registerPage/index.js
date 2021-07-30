import React, { Fragment, useState } from "react";
import FormUserDetails from "../../components/userForm/formUserDetails";
import axios from "axios";

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
    const [errorMsg, setErrorMsg] = useState("");

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
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
        } catch (e) {
            setErrorMsg(e.response.data.ErrorMsg);
        }

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
        <Fragment>
            <div>{errorMsg && errorMsg.errorMessage}</div>
            <FormUserDetails
                values={values}
                handleChange={handleChange}
                handelSubmit={handelSubmit}
                errorMsg={errorMsg}
            />
        </Fragment>
    )
};

export default RegisterForm;