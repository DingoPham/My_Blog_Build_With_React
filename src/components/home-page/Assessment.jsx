import '../../assets/Style/Body.css'

import React from 'react';
import { useTranslation } from '../other-function/TranslationList';

const Assessment = () =>{
    const {translations, language} = useTranslation();

    return(
            <div className='f-30 m-4 tx-center'>
            <ul className='flex flex-column'> 
                {translations[language].mySkills}
                <li className="flex gap flex-end">HTML/CSS:
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </li>
                <li className="flex gap flex-end">JS:
                    <div className="flex">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </li>
                <li className="flex gap flex-end">VueJS:
                    <div className="flex">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </li>
                <li className="flex gap flex-end">ReactJS:
                    <div className="flex">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </li>
                <li className="flex gap flex-end">C#:
                    <div className="flex">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </li>
                <li className="flex gap flex-end">PHP:
                    <div className='flex'>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </li>
                <li className="flex gap flex-end">WordPress:
                    <div className="flex">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Assessment;