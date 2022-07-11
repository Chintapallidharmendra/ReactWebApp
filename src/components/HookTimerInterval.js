import React, { useEffect, useState, useRef } from "react";

const HookTimerInterval = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <p>HookTimerInterval</p>
      <p>Timer-{timer}</p>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default HookTimerInterval;
