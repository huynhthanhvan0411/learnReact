import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateEmail, validatePassword } from "../utils/validation";
import InputField from "../components/InputField";
import { ButtonLogin, LinkDirect, FormLogin, Div1, Title1 } from "../styled/styled";
import ButtonLanguage from "../components/ButtonLanguage";

const Login = () => {
  const { t } = useTranslation(); // Sử dụng hook để lấy hàm t (dịch)
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

    // Check error name
    if (!formData.name) {
      nameError = t("nameRequired"); // Lấy nội dung dịch
    } else if (!validateEmail(formData.name)) {
      nameError = t("invalidEmail");
    } else if (formData.name.length < 8 || formData.name.length > 10) {
      nameError = t("nameLength");
    } else if (!/[a-z]/.test(formData.name) || !/[A-Z]/.test(formData.name) || !/\d/.test(formData.name)) {
      nameError = t("nameComplexity");
    }

    // Check error password
    if (!formData.password) {
      passwordError = t("passwordRequired");
    } else if (!validatePassword(formData.password)) {
      passwordError = t("invalidPassword");
    } else if (/\s/.test(formData.password)) {
      passwordError = t("passwordNoSpaces");
    }

    // Set errors if any
    setErrors({ name: nameError, password: passwordError });

    // If no errors, submit the form
    if (!nameError && !passwordError) {
      alert(t("formSubmitted"));
    }
  };

  return (
    <Div1>
      <ButtonLanguage />
      <div>
        <FormLogin onSubmit={handleSubmit}>
          <Title1>{t("loginTitle")}</Title1>
          <InputField
            type="text"
            name="name"
            placeholder={t("enterName")}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
          />
          <InputField
            type="password"
            name="password"
            placeholder={t("enterPassword")}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={errors.password}
          />
          <ButtonLogin type="submit">{t("loginButton")}</ButtonLogin>
          <LinkDirect target="_blank" href="#">
            {t("signUp")}
          </LinkDirect>
        </FormLogin>
      </div>
    </Div1>
  );
};

export default Login;
