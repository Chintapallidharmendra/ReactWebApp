import { useState } from "react";

const useCounter = (initialCount = 0, counterValue = 1) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + counterValue);
  };
  const decrement = () => {
    setCount(count - counterValue);
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
};

export default useCounter;
