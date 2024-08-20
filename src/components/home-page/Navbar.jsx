import '../../assets/Style/Header.css';
import '../../assets/Style/StyleMain.css';

import React, {useEffect} from "react"
import { useTranslation } from '../other-function/TranslationList';

const Navbar = () => {
    const {translations, language} = useTranslation();

    useEffect(() => {
        const handleAnchorClick = (e) => {
            e.preventDefault();

            const href = e.target.getAttribute('href');

            if (href === '/') {
                window.location.href = href;
                return;
            }

            const targetId = href.substring(1);
            const targetEle = document.getElementById(targetId);
            if (targetEle) {
                const targetOffSet = targetEle.offsetTop;

                const windowHeight = window.innerHeight;
                const targetHeight = targetEle.offsetHeight;
                const scroll = targetOffSet - (windowHeight - targetHeight) / 2;

                window.scrollTo({
                    top: scroll,
                    behavior: 'smooth'
                });
            }
        };
        const anchors = document.querySelectorAll('#navBar a');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, []);
    return (
        <div className="navbar p-1 w-p-100" id='navBar'>
            <div className='flex space-around navbar-container tx-c f-30'>
                <a href='/'>DINGOPHAM</a>
                <div className='flex gap'>
                    <a href="#aboutMe">{translations[language].abtMe}</a>
                    <a href="#thisWebsite">{translations[language].thisWeb}</a>
                    <a href="#desire">{translations[language].des}</a>
                    <a href="#mySkills">{translations[language].mySki}</a>
                    <a href="#otherThings">{translations[language].otherThi}</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;