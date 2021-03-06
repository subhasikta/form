import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import FormLoginDetails from "../../components/userForm/formLoginDetails";
import axios from "axios";

const RegisterForm = () => {
    const history = useHistory();
    
    const [state, setstate] = useState({
        email: "",
        password: ""
    });
    const [errorMsg, setErrorMsg] = useState("");

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", { values });
            console.log("resLogin", response);
            setstate({
                ...state,
                email: "",
                password: ""
            });
            window.localStorage.setItem('AuthToken', response.data.token);
            window.localStorage.setItem('id',response.data.id);
            history.push('/');
        } catch (e) {
            setErrorMsg(e.response.data.ErrorMsg);
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