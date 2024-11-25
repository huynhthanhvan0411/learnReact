import React from "react";
import { Input, TextError } from "../styled/styled";

const InputField =({type, name, placeholder, value, onChange, error}) => {
    return (
        <div>
            <Input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <TextError>{error}</TextError>}
        </div>
    );
}

export default InputField;