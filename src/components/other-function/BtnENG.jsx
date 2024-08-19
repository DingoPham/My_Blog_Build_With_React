import React from "react";
import { useTransition } from "./TranslationList";

function BtnENG(){
    const { changeLanguage } = useTransition();

    return(
        <div onClick={() => changeLanguage('en')}>
            <img className="w-30 h-30 m-t-5" src="https://res.cloudinary.com/dtqyzzv0h/image/upload/v1724059045/e_qxvkan.png" alt="" />
        </div>
    )
}

export default BtnENG