import React,{useState} from "react";
import i18next from "i18next";

const ButtonLanguage = () => {
    const [language, setLanguage] = useState("vi");

    const toggleLanguage = () => {
        const newLanguage = language === "vi" ? "en" : "vi"; 
        i18next.changeLanguage(newLanguage); 
        setLanguage(newLanguage);
      };

     return (
        <button onClick={toggleLanguage}>
            {language === "vi" ? "Chuyển sang Tiếng Anh" : "Switch to Vietnamese"}
        </button>
     );
}

export default ButtonLanguage; 