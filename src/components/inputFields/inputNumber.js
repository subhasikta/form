import React from "react";

const InputNumberField = ({ eachField, handleChange, errorMsg }) => {

    return (
        <div>
            <input
                type={eachField.type}
                name={eachField.name}
                placeholder={eachField.placeholder}
                value={eachField.defaultValue}
                onChange={handleChange}
            />
            <div>{errorMsg && eachField.name === "mobileNumber" ? errorMsg.mobileError : null}</div>
        </div>
    );
};

export default InputNumberField;