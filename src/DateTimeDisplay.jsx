import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the currentDateTime every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  // Format the date and time
  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      <h2> Date and Time:</h2>
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeDisplay;
