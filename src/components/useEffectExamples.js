import React, { useState, useEffect } from "react";
import ContentTop from "./ContentTop";

const UseEffectExamples = ({ handleGoToContentsClick }) => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    });
  }, []);

  return (
    <div>
      <ContentTop
        contentHeading="UseStateExamples: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <p>Title Update -- Button Click(Conditonal call effect) </p>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>{`Name: ${name}`}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked {count} times
      </button>
      <hr />
      <p>UseEffect to add event listener</p>
      <p>{`mouseX - ${mouseX} || mouseY - ${mouseY}`}</p>
    </div>
  );
};

export default UseEffectExamples;
