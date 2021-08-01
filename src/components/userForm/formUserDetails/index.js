import React, { Fragment } from "react";
import InputNumberField from '../../inputFields/inputNumber';
import InputRadioButton from "../../inputFields/inputRadioButton";
import InputDate from "../../inputFields/inputDate";
import InputTextField from '../../inputFields/inputText';

const FormUserDetails = ({ handelSubmit, handleChange, values, errorMsg }) => {

    const userFields = [
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
        },
        {
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm Password",
            defaultValue: values.confirmPassword
        },
        {
            type: "text",
            name: "firstName",
            placeholder: "Firstname",
            defaultValue: values.firstName
        },
        {
            type: "text",
            name: "lastName",
            placeholder: "Lastname",
            defaultValue: values.lastName
        },
        {
            type: "radio",
            gender: ["Male", "Female", "Other"],
        },
        {
            type: "date",
            name: "dob",
            placeholder: "dd-mm-yyyy",
            defaultValue: values.dob
        },
        {
            type: "text",
            name: "fatherName",
            placeholder: "Father Name",
            defaultValue: values.fatherName
        },
        {
            type: "text",
            name: "motherName",
            placeholder: "Mother Name",
            defaultValue: values.motherName
        },
        {
            type: "number",
            name: "mobileNumber",
            placeholder: "Mobile Number",
            defaultValue: values.mobileNumber
        }
    ];

    return (
        <Fragment>
            <h4>Enter User Details</h4>
            <form method="POST">
                {userFields && userFields.map((eachField, index) => {
                    return (
                        eachField.type === "number"
                            ? <InputNumberField key={index}
                                eachField={eachField}
                                handleChange={handleChange}
                                errorMsg={errorMsg} />
                            : eachField.type === "radio"
                                ? <InputRadioButton key={index}
                                    eachField={eachField}
                                    handleChange={handleChange}
                                    errorMsg={errorMsg} />
                                : eachField.type === "date"
                                    ? <InputDate key={index}
                                        eachField={eachField}
                                        handleChange={handleChange}
                                        errorMsg={errorMsg} />
                                    : <InputTextField key={index}
                                        eachField={eachField}
                                        handleChange={handleChange}
                                        errorMsg={errorMsg} />
                    )
                })}
                <button onClick={handelSubmit}>
                    Register
                </button>
            </form>
        </Fragment>
    );
};

export default FormUserDetails;