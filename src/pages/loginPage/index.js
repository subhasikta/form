import React, { useState } from "react";
import FormLoginDetails from "../../components/userForm/formLoginDetails";

const RegisterForm = () => {

    const [state, setstate] = useState({
        email: "",
        password: "",
    });

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        setstate({
            ...state,
            email: "",
            password: ""
        });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    };

    const { email, password } = state;

    const values = { email, password };

    return (
        <FormLoginDetails
            values={values}
            handleChange={handleChange}
            handelSubmit={handelSubmit}
        />
    )
};

export default RegisterForm;