import React, { useState, useMemo } from "react";
import ContentTop from "./ContentTop";

const UseMemoExample = ({ handleGoToContentsClick }) => {
  const [count1, setCounter1] = useState(0);
  const [count2, setCounter2] = useState(0);
  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) {
      i++;
    }
    return count1 % 2 === 0 ? "Even" : "Odd";
  }, [count1]);

  return (
    <>
      <ContentTop
        contentHeading="UseMemoExample: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <div>
        <button onClick={() => setCounter1(count1 + 1)}>
          CounterOne - {count1}
        </button>
        <span>{isEven}</span>
      </div>
      <button onClick={() => setCounter2(count2 + 1)}>
        CounterTwo - {count2}
      </button>
    </>
  );
};

export default UseMemoExample;
