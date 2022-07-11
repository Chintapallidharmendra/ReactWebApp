import React, { useEffect, useRef } from "react";

const InputFocuser = () => {
  const inRef = useRef(null);
  useEffect(() => {
    if (inRef !== null) {
      inRef.current.focus();
    }
  }, []);
  return (
    <div>
      InputFocuser- <input ref={inRef} />
    </div>
  );
};

export default InputFocuser;
