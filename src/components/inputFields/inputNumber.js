import React from "react";

const InputNumberField = ({ eachField, handleChange }) => {

    return (
        <div>
            <input
                type={eachField.type}
                name={eachField.name}
                placeholder={eachField.placeholder}
                value={eachField.defaultValue}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputNumberField;