import React from "react";
import BtnVIE from "./BtnVIE";
import BtnENG from "./BtnENG";
import { useTranslation } from "./TranslationList";


function TranslationFunction() {

    const {language, changeLanguage} = useTranslation();

    const toggleLanguage = () => {
        changeLanguage(language === 'en' ? 'vi' : 'en');
    };

    return(
        <div>
            <div className="cursor">
                <button onClick={toggleLanguage}>
                    {language === 'en' ? <BtnVIE /> : <BtnENG />}
                </button>
            </div>
        </div>
    )
}

export default TranslationFunction;