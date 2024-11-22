import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

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

function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });
  //check validate email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  //check validate password
  const validatePassword = (password) => {
    const passwordlRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+<>?]).{8,}$/;
    return passwordlRegex.test(password);
  };
  //check form when click button
  const handleSubmit = (e) => {
    e.preventDefault();

    let nameError = "";
    let passwordError = "";

    //check error name
    if (!formData.name) {
      nameError = "Name is required";
    } else if (!validateEmail(formData.name)) {
      nameError = "Please enter a valid email.";
    } else if (formData.name.length < 8 || formData.name.length > 20) {
      nameError = "Name must be between 8 and 20 characters.";
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
    <div className="App bg-slate-900 w-full h-full">
      <div className="px-96 py-20 ">
        <div className="bg-white rounded-lg px-10">
          <h1 className="text-center font-semibold text-3xl py-5">Log in</h1>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="w-full mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="flex-1 w-full border border-blue-400 p-4 rounded-md"
                />
                {errors.name && <small className="text-red-500">{errors.name}</small>}
              </div>

              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="flex-1 w-full border border-blue-400 p-4 rounded-md"
                />
                {errors.password && <small className="text-red-500">{errors.password}</small>}
              </div>

              <button type="submit" className="bg-cyan-400 flex-1 w-full text-white rounded-md py-4 mt-4">
                Log in
              </button>
            </form>
            <a target="_blank" href="#" className="text-center pb-5">
              or, sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
