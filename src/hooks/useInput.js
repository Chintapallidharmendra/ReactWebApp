import { useState } from "react";

const useInput = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);
  const bind = {
    value: inputValue,
    onChange: (e) => {
      setInputValue(e.target.value);
    },
  };
  const reset = () => {
    setInputValue(initialValue);
  };
  return [inputValue, bind, reset];
};

export default useInput;
