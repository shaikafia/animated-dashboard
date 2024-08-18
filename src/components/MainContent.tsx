import React, { useEffect, useState } from 'react';  
import { motion, useAnimation } from 'framer-motion';  

const MainContent: React.FC = () => {  
    const controls = useAnimation();  
    const [scrollY, setScrollY] = useState(0);  

    const handleScroll = () => {  
        const newScrollY = window.scrollY;  
        setScrollY(newScrollY);  
        controls.start({ backgroundPositionY: `${newScrollY * 0.5}px` });  
    };  

    useEffect(() => {  
        window.addEventListener('scroll', handleScroll);  
        return () => window.removeEventListener('scroll', handleScroll);  
    }, []);  

    return (  
        <motion.main  
            animate={controls}  
            style={{  
                padding: '20px',  
                flex: 1,  
                background: 'linear-gradient(to top, #292c6d, #6a6edb)',  
                backgroundAttachment: 'fixed',  
                transition: 'background-position 0.1s linear'  
            }}  
        >  
            <h2>Main Content</h2>  
            <div style={{ height: '150vh' }}>  
                <p>Scroll down for the animation!</p>  
            </div>  
        </motion.main>  
    );  
};  

export default MainContent;