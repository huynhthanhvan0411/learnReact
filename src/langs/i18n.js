import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
  en: {
    translation: {
      loginTitle: "Log in",
      enterName: "Enter your name",
      enterPassword: "Enter your password",
      loginButton: "Log in",
      signUp: "or, sign up",
      nameRequired: "Name is required.",
      invalidEmail: "Please enter a valid email.",
      nameLength: "Name must be between 8 and 10 characters.",
      nameComplexity: "Name must contain at least one letter (lowercase and uppercase) and one number.",
      passwordRequired: "Password is required.",
      invalidPassword:
        "Password must be at least 8 characters long, include one letter, one number, and one special character.",
      passwordNoSpaces: "Password cannot contain spaces.",
      formSubmitted: "Form submitted successfully!",
    },
  },
  vi: {
    translation: {
      loginTitle: "Đăng nhập",
      enterName: "Nhập tên của bạn",
      enterPassword: "Nhập mật khẩu của bạn",
      loginButton: "Đăng nhập",
      signUp: "hoặc, đăng ký",
      nameRequired: "Tên là bắt buộc.",
      invalidEmail: "Vui lòng nhập một email hợp lệ.",
      nameLength: "Tên phải từ 8 đến 10 ký tự.",
      nameComplexity: "Tên phải có ít nhất một chữ cái (hoa và thường) và một số.",
      passwordRequired: "Mật khẩu là bắt buộc.",
      invalidPassword:
        "Mật khẩu phải có ít nhất 8 ký tự, bao gồm một chữ cái, một số và một ký tự đặc biệt.",
      passwordNoSpaces: "Mật khẩu không được chứa khoảng trắng.",
      formSubmitted: "Gửi biểu mẫu thành công!",
    },
  },
},

    fallbackLng: "vi", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18next;