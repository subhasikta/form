import React from "react";

const InputRadioButton = ({ eachField, handleChange, errorMsg }) => {

    return (
        <div>
            {eachField.gender && eachField.gender.map((eachField, index) => {
                return (
                    <div key={index}>
                        <input type="radio"
                            name="gender"
                            value={eachField}
                            onChange={handleChange}
                        />
                        <label>{eachField}</label>
                    </div>
                )
            })}
            <div>{errorMsg && errorMsg.genderError}</div>
        </div>
    );
};

export default InputRadioButton;