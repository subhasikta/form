import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import InputTextField from '../../inputFields/inputText';

const FormUserDetails = ({ handelSubmit, handleChange, values, errorMsg }) => {

    const loginFields = [
        {
            type: "email",
            name: "email",
            placeholder: "Username",
            defaultValue: values.email
        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            defaultValue: values.password
        }
    ];

    return (
        <Fragment>
            <form method="POST">
                {loginFields && loginFields.map((eachField, index) => {
                    return (
                        <InputTextField key={index}
                            eachField={eachField}
                            handleChange={handleChange}
                            errorMsg={errorMsg} />
                    )
                })}
                <button onClick={handelSubmit}>
                    Login
                </button>
            </form>
            <div>
                <div>Do not have an account?</div>
                <NavLink to="/register">
                    <span>
                        Register
                    </span>
                </NavLink>
            </div>
        </Fragment>
    );
};

export default FormUserDetails;