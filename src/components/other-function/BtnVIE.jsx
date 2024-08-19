import React from "react";
import { useTransition } from "./TranslationList";

function BtnVIE(){
    const { changeLanguage } = useTransition();

    return(
        <div onClick={() => changeLanguage('vi')}>
            <img className="w-30 h-30 m-t-5" src="https://res.cloudinary.com/dtqyzzv0h/image/upload/v1724059046/v_sr1h12.png" alt="" />
        </div>
    )
}

export default BtnVIE