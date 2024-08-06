import React, { useRef, useEffect } from 'react';
import './AnimatedContent.css';

const AnimatedContent = ({ children }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });

        const currentRef = contentRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={contentRef} className="animated-content">
            {children}
        </div>
    );
};

export default AnimatedContent;
