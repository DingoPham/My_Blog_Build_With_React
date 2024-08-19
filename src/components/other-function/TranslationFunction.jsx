import React, { useState } from "react";
import BtnVIE from "./BtnVIE";
import BtnENG from "./BtnENG";

function Translations() {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    })

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'vi' : 'en'));
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

export default Translations;