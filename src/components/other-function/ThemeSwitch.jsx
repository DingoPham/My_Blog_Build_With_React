import React, {useState, useEffect} from "react"
import DarkBtn from "./DarkBtn";
import LightBtn from "./LightBtn";

function ThemeSwitch() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light'; 
    });

    useEffect (() => {
        document.body.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) =>  (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    return(
        <div>
            <div onClick={toggleTheme}>
                {theme === 'light' ? <DarkBtn /> : <LightBtn />}
            </div>
        </div>
    )
}

export default ThemeSwitch;