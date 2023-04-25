import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Timer = ({ redirectPath, durationInSeconds }) => {
  const history = useHistory();
  const [secondsRemaining, setSecondsRemaining] = useState(durationInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining(prevSeconds => prevSeconds - 1);
    }, 1000);

    if (secondsRemaining === 0) {
      clearInterval(intervalId);
      history.push(redirectPath);
    }

    return () => clearInterval(intervalId);
  }, [secondsRemaining, redirectPath, history]);

  return (
    <div>
      <p>Redirecting in {secondsRemaining} seconds...</p>
    </div>
  );
};

export default Timer;
