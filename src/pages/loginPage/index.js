import axios from "axios";
import React, { Fragment, useState } from "react";
import FormLoginDetails from "../../components/userForm/formLoginDetails";

const RegisterForm = () => {

    const [state, setstate] = useState({
        email: "",
        password: ""
    });
    const [errorMsg, setErrorMsg] = useState("");

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
            setErrorMsg(e.response.data.errorMessage);
        }
    };
    // console.log(errorMsg);

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setstate({ ...state, [name]: value });
    };

    const { email, password } = state;
    const values = { email, password };

    return (
        <Fragment>
            <FormLoginDetails
                values={values}
                handleChange={handleChange}
                handelSubmit={handelSubmit}
                errorMsg={errorMsg}
            />
        </Fragment>
    )
};

export default RegisterForm;