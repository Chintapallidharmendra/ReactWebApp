import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>FunctionalCounter</div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default FunctionalCounter;
