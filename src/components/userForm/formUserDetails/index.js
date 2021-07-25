import React, { Fragment } from "react";
import InputNumberField from '../../inputFields/inputNumber';
import InputRadioButton from "../../inputFields/inputRadioButton";
import InputTextField from '../../inputFields/inputText';

const FormUserDetails = ({ handelSubmit, handleChange, values }) => {

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
            gender: ["Male", "Female", "Other"]
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
            type: "text",
            name: "mobileNumber",
            placeholder: "Mobile Number",
            defaultValue: values.mobileNumber
        },
        {
            type: "select",
            name: "city",
            citySelect: ["Berhampur", "xiegfi", "kjxanid"]
        },
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
                                handleChange={handleChange} />
                            : eachField.type === "radio"
                                ? <InputRadioButton key={index}
                                    eachField={eachField}
                                    handleChange={handleChange} />
                                : <InputTextField key={index}
                                    eachField={eachField}
                                    handleChange={handleChange} />
                    )
                })}
                <button onClick={handelSubmit}>
                    Submit
                </button>
            </form>
        </Fragment>
    );
};

export default FormUserDetails;