import React from "react";

const InputTextField = ({ eachField, handleChange, errorMsg }) => {

    return (
        <div>
            {console.log(errorMsg)}

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