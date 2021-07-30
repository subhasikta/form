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
                        : errorMsg.nameError}</div>

            {/* <div>{errorMsg && eachField.name === "email" ? errorMsg.emailError : errorMsg.passwordError}</div> */}
        </div>
    );
};

export default InputTextField;