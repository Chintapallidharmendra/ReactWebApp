import React, { useState } from "react";
import ContentTop from "./ContentTop";

const UseStateExamples = ({ handleGoToContentsClick }) => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [randNum, setRandNum] = useState([]);
  return (
    <div>
      <ContentTop
        contentHeading="UseStateExamples: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <p>Use State With Object</p>
      <form>
        <input
          placeholder="Enter First Name"
          onChange={(event) => {
            setName({ ...name, firstName: event.target.value });
          }}
        />
        <input
          placeholder="Enter Last Name"
          onChange={(event) => {
            setName({ ...name, lastName: event.target.value });
          }}
        />
      </form>
      <p>
        FirstName: {name.firstName} || lastName: {name.lastName}
      </p>
      <hr />
      <p>UseState With Array</p>
      <button
        onClick={() => {
          setRandNum([...randNum, parseInt(Math.random() * 10)]);
        }}
      >
        Add Random Number
      </button>
      <p>Elements in Array : {String(randNum)}</p>
    </div>
  );
};

export default UseStateExamples;
