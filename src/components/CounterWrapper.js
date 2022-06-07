import React from "react";
import ClassCounter from "./ClassCounter";
import ContentTop from "./ContentTop";
import FunctionalCounter from "./FunctionalCounter";

const CounterWrapper = ({ handleGoToContentsClick }) => {
  return (
    <div>
      <ContentTop
        contentHeading="CounterWrapper: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <ClassCounter />
      <hr />
      <FunctionalCounter />
    </div>
  );
};

export default CounterWrapper;
