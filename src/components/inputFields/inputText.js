import React from "react";

const InputTextField = ({ eachField, handleChange, errorMsg }) => {
    return (
        <div>
            <input
                type={eachField.type}
                name={eachField.name}
                placeholder={eachField.placeholder}
                value={eachField.defaultValue}
                onChange={handleChange}
            />
            <div>{errorMsg &&
                eachField.name === "email" ? errorMsg.emailError
                : eachField.name === "password" ? errorMsg.passwordError
                    : eachField.name === "confirmPassword" ? errorMsg.confirmPasswordError
                        : eachField.name === "firstName" ? errorMsg.firstNameError
                            : eachField.name === "lastName" ? errorMsg.lastNameError
                                : eachField.name === "fatherName" ? errorMsg.fatherNameError
                                    : eachField.name === "motherName" ? errorMsg.motherNameError : null}</div>

        </div>
    );
};

export default InputTextField;