import axios from "axios";
import React, { useState } from "react";
import FormLoginDetails from "../../components/userForm/formLoginDetails";

const RegisterForm = () => {

    const [state, setstate] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState({});

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        try {
            const response = await axios.post("http://localhost:5000/api/login", { values });
            console.log("resLogin", response);
            setstate({
                ...state,
                email: "",
                password: ""
            });
        } catch (e) {
            e.response.data.errorMessage &&
                setError(e.response.data.errorMessage);
            setTimeout(console.log(error),3000);
            // console.log(error);
        }
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
            errorMessage={error}
        />
    )
};

export default RegisterForm;