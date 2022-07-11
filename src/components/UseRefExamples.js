import React from "react";
import ClassTimerInterval from "./ClassTimerInterval";
import ContentTop from "./ContentTop";
import HookTimerInterval from "./HookTimerInterval";
import InputFocuser from "./InputFocuser";

const UseRefExamples = ({ handleGoToContentsClick }) => {
  return (
    <div>
      <ContentTop
        contentHeading="UseRef Examples: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <InputFocuser />
      <ClassTimerInterval />
      <HookTimerInterval />
    </div>
  );
};

export default UseRefExamples;
