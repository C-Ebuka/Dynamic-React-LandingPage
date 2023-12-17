import React, { useState, useEffect } from 'react';

const TypingText = () => {
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');


  const fullLine1 = 'Welcome! I am chukwuebuka.';
  const fullLine2 = 'My stack: HTML, CSS, JAVASCRIPT, TYPESCRIPT, REACT.JS, REACT-NATIVE, NODE.JS AND MONGO DB.';


  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= fullLine1.length) {
        setLine1(fullLine1.slice(0, currentIndex));
        currentIndex += 1;
      } else if (currentIndex <= fullLine1.length + fullLine2.length) {
        setLine2(fullLine2.slice(0, currentIndex - fullLine1.length));
        currentIndex += 1;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval duration as needed

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [fullLine1, fullLine2]);

  return (
    <div>
      <h1>{line1}</h1>
      <h1>{line2}</h1>
    </div>
  );
};

export default TypingText;





