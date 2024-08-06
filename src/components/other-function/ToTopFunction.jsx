import React, {useState, useEffect} from 'react';
import '../../assets/Style/Function.css';

const ToTopFunc = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>{
        if(window.pageYOffset > 1000 ){
            setIsVisible(true);
        }
        else{
            setIsVisible(false)
        }
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
                    <i className="fas fa-caret-up tx-c"></i>
                </button>
        )}
        </div>
    )
}

export default ToTopFunc;