import React, { createContext, useContext } from "react";
import ContentTop from "./ContentTop";

const errorClass = {
  color: "red",
  fontSize: "16px",
  backgroundColor: "yellow",
};

const ContentA = () => {
  return <ContentB />;
};

const ContentB = () => {
  return <ContentC />;
};

const ContentC = () => {
  const contextAValue = useContext(userContext);
  return (
    <>
      Consuming Context in C : {contextAValue}
      <userContext2.Provider value="From ContentC"></userContext2.Provider>
    </>
  );
};

const userContext = createContext();
const userContext2 = createContext();

const UseContextExample = ({ handleGoToContentsClick }) => {
  const context2Value = useContext(userContext2);
  return (
    <div>
      <ContentTop
        contentHeading="UseContextExample: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <userContext.Provider value="From ContentA">
        <ContentA />
      </userContext.Provider>
      <p>
        Consuming Context in A:{" "}
        {context2Value ? (
          context2Value
        ) : (
          <span style={errorClass}>Can't read from C as it is child of A</span>
        )}
      </p>
    </div>
  );
};

export default UseContextExample;
