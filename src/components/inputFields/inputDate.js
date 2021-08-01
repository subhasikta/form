import React from "react";

const InputDate = ({ eachField, handleChange, errorMsg }) => {

    return (
        <div>
            <input
                type={eachField.type}
                name={eachField.name}
                placeholder={eachField.placeholder}
                value={eachField.defaultValue}
                onChange={handleChange}
            />
            <div>{errorMsg && eachField.name === "dob" ? errorMsg.dobError : null}</div>
        </div>
    );
};

export default InputDate;