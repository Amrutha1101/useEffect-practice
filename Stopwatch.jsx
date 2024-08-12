import { useState, useEffect } from "react";

export const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);
  const handleStartStop = () => {
    setIsRunning((prevIsRunnig) => !prevIsRunnig);
  };
  const handleRestart = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };
  const hour = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;
  const formattedTime = `${String(hour).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  return (
    <div>
      <h1>{formattedTime}</h1>
      <button onClick={handleStartStop}>Start</button>
      <button onClick={handleStartStop}>Stop</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  );
};
