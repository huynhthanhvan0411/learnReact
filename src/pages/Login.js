import React, { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validation";
import InputField from "../components/InputField";
import { ButtonLogin, LinkDirect, FormLogin, Div1, Title1 } from "../styled/styled";
import ButtonLanguage from "../components/ButtonLanguage";

/*Rule validation:
1. Name:
 - độ dài 8-20 kí tự
 - phải là 1 email hợp lệ
 - không để trống
 - có cả số chữ và chữ viết hoa 
2. Password: 
 - Tối thiểu 8 ký tự.
 - Phải có ít nhất một chữ cái.
 - Phải có ít nhất một số.
 - Phải có ít nhất một ký tự đặc biệt (ví dụ: @, #, $, !).
 - Không được chứa khoảng trắng.
 3. Không đáp ứng click button check name và password, k đùng báo đỏ ở sai hiện dòng mô tả sai cho user biết tại vị trí ô input đấy
*/
const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let nameError = "";
    let passwordError = "";

    //check error name
    if (!formData.name) {
      nameError = "Name is required";
    } else if (!validateEmail(formData.name)) {
      nameError = "Please enter a valid email.";
    } else if (formData.name.length < 8 || formData.name.length > 10) {
      nameError = "Name must be between 8 and 10 characters.";
    } else if (!/[a-z]/.test(formData.name) || !/[A-Z]/.test(formData.name) || !/\d/.test(formData.name)) {
      nameError = "Name must contain at least one letter (lowercase and uppercase) and one number.";
    }
    //check error password
    if (!formData.password) {
      passwordError = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      passwordError =
        "Password must be at least 8 characters long, include one letter, one number, and one special character.";
    } else if (/\s/.test(formData.password)) {
      passwordError = "Password cannot contain spaces.";
    }

    // Set errors if any
    setErrors({ name: nameError, password: passwordError });

    // If no errors, submit the form (you can handle form submission here)
    if (!nameError && !passwordError) {
      alert("Form submitted!");
    }
  };
  return (
    <Div1>
    <ButtonLanguage/>
      <div>
        <FormLogin onSubmit={handleSubmit}>
          <Title1>Log in</Title1>
          <InputField
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={errors.password}
          />
          <ButtonLogin type="submit">Log in</ButtonLogin>
          <LinkDirect target="_blank" href="#">
            or, sign up
          </LinkDirect>
        </FormLogin>
      </div>
    </Div1>
  );
};

export default Login;
