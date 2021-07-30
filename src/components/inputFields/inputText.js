import React from "react";

const InputTextField = ({ eachField, handleChange, errorMsg }) => {

    // console.log(errorMsg);
    return (
        <div>
            <input
                type={eachField.type}
                name={eachField.name}
                placeholder={eachField.placeholder}
                value={eachField.defaultValue}
                onChange={handleChange}
            />
            <p>{errorMsg && errorMsg}</p>
        </div>
    );
};

export default InputTextField;