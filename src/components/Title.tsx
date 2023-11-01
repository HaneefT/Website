import "../styles/TextWithEffect.css"
import { useState, useEffect } from 'react';

const font = {fontFamily:'JetBrains Mono', fontSize:'1.75rem',fontWeight:'600',letterSpacing:'0.1em',color:'white'}

                const TextWithEffect = () => {
                    const text = "Haneef Taher";
                    const [typedText, setTypedText] = useState('');
                    const [currentIndex, setCurrentIndex] = useState(0);
                    const [showCursor, setShowCursor] = useState(true);
                  
                    useEffect(() => {
                      if (currentIndex < text.length) {
                        const typingInterval = setInterval(() => {
                          setTypedText((prevTypedText) => prevTypedText + text[currentIndex]);
                          setCurrentIndex((prevIndex) => prevIndex + 1);
                        }, 200); // Adjust the interval (in milliseconds) to control the typing speed
                  
                        return () => {
                          clearInterval(typingInterval); // Clean up the interval when the component unmounts
                        };
                      }
                    }, [text, currentIndex]);
                  
                    useEffect(() => {
                      if (currentIndex === text.length) {
                        setTimeout(() => {
                          setShowCursor(false); // Hide the cursor after a short delay when typing is completed
                        }, 150); // Adjust the delay (in milliseconds) before hiding the cursor
                      }
                    }, [currentIndex, text.length]);

return ( 
    <h1 className="typing-effect" style = {font}>{typedText}  
    {showCursor && <span className= "cursor-style">|</span>}
    </h1>
);
};

export default TextWithEffect;
  