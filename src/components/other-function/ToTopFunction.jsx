import React, {useState, useEffect} from 'react';
import '../../assets/Style/Function.css';

function ToTopFunc(){
    const [isVisible, setIsVisible] = useState(false)
    const [isHover, setIsHover] = useState(false)

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPostion = window.pageYOffset;
            setIsVisible(scrollPostion > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    return(
        <div>
           <button className='scroll-to-top'
                   style={styleTop(isVisible , isHover)}
                   onClick={toTop}
                   disabled={!isVisible}
                   onMouseEnter={() => setIsHover(true)}
                   onMouseLeave={() => setIsHover(false)}
                   >
                <i className="fas fa-caret-up tx-c c-black"></i>
            </button>
        </div>
    );
}   

const styleTop = (isVisible, isHover) => ({
    backgroundColor: isHover ? '#ffffff' : isVisible ? '#00000060' : '#1d1d1d',
    cursor: isVisible ? 'pointer' : 'not-allowed',
    opacity: isVisible ? '1' : '0.5'
}); 


export default ToTopFunc;