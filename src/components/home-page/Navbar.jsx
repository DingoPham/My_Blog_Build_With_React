import '../../assets/Style/Header.css';
import '../../assets/Style/StyleMain.css';

import React, {useEffect} from "react"
import ThemeSwitch from '../other-function/ThemeSwitch';

const Navbar = () => {
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
                    <a href="#aboutMe">ABOUT ME</a>
                    <a href="#thisWebsite">THIS WEBSITE</a>
                    <a href="#desire">DESRIRE</a>
                    <a href="#mySkills">MY SKILLS</a>
                    <a href="#otherThings">OTHER THINGS</a>
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    )
}

export default Navbar;