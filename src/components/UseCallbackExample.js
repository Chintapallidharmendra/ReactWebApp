import React, { useState, memo, useCallback } from "react";
import ContentTop from "./ContentTop";

const Title = memo(() => {
  console.log("Title called..");
  return <p>Employee</p>;
});

const Count = memo(({ text, value }) => {
  console.log("Count called", text);
  return <p>{`${text} -${value}`}</p>;
});

const Button = memo((props) => {
  console.log("Button called", props.text);
  return (
    <button
      onClick={() => {
        props.callback();
      }}
    >
      {`${props.children} ${props.text}`}
    </button>
  );
});

const UseCallbackExample = ({ handleGoToContentsClick }) => {
  const [age, setAge] = useState(23);
  const [salary, setSalary] = useState(50000);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);
  return (
    <>
      <ContentTop
        contentHeading="UseCallbackExample: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <Title />
      <Count text="Age" value={age} />
      <Button callback={incrementAge} text="age">
        Increment
      </Button>
      <Count text="Salary" value={salary} />
      <Button callback={incrementSalary} text="salary">
        Increment
      </Button>
    </>
  );
};

export default UseCallbackExample;
