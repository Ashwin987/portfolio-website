
import React, { useState, useEffect } from 'react';
import './LiveClock.css'; 

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="live-clock">
      {time.toLocaleTimeString()}
    </div>
  );
};

export default LiveClock;
