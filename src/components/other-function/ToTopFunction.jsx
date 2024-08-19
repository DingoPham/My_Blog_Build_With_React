import React, {useState, useEffect} from 'react';
import '../../assets/Style/Function.css';

function ToTopFunc(){
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>{
        setIsVisible(true)
    };

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return(
        <div>
            {isVisible && (
                <button onClick={toTop} className='scroll-to-top'>
                    <i className="fas fa-caret-up tx-c c-black"></i>
                </button>
        )}
        </div>
    )
}

export default ToTopFunc;