import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <>
      <div>FunctionalCounter</div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <hr />
      <div>FunctionalCounter with Previous State </div>
      <button onClick={() => setCount1((prevState) => prevState + 1)}>
        Count {count1}
      </button>
      <hr />

    </>
  );
};

export default FunctionalCounter;
