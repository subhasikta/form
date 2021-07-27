import React from "react";

const InputTextField = ({ eachField, handleChange, errorMessage }) => {

    return (
        <div>
            <input
                type={eachField.type}
                name={eachField.name}
                placeholder={eachField.placeholder}
                value={eachField.defaultValue}
                onChange={handleChange}
            />
            <div>{errorMessage ? errorMessage : ""}</div>
        </div>
    );
};

export default InputTextField;