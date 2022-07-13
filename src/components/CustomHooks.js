import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
import useDocTitle from "../hooks/useDocTitle";
import useInput from "../hooks/useInput";
import ContentTop from "./ContentTop";

const DocCounter = () => {
  const [count, setCount] = useState(0);
  useDocTitle(count);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Count -{count}
    </button>
  );
};

const UserForm = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const submitForm = (e) => {
    e.preventDefault();
    alert(`Full Name: ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <form onSubmit={submitForm}>
      <label>FirstName:</label>
      <input {...bindFirstName} />
      <br />
      <label>LastName:</label>
      <input {...bindLastName} />
      <br />
      <button>Submit</button>
    </form>
  );
};

const FullCounter = ({ title, initialCount, counterValue }) => {
  const [count, increment, decrement, reset] = useCounter(
    initialCount,
    counterValue
  );
  return (
    <div>
      <p>
        {title}-{count}
      </p>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <br />
    </div>
  );
};

const CustomHooks = ({ handleGoToContentsClick }) => {
  return (
    <div>
      <ContentTop
        contentHeading="Custom Hooks: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <DocCounter />
      {"  "}
      <DocCounter />
      <br />
      <br />
      <FullCounter title="Counter One" />
      <FullCounter title="Counter Two" initialCount={5} counterValue={5} />
      <br />
      <UserForm />
    </div>
  );
};

export default CustomHooks;
