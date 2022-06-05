import React from "react";

const ContentTop = ({ contentHeading, handleGoToContentsClick }) => {
  return (
    <div className="contentHeadFlex">
      <h3>{contentHeading} </h3>
      <button
        className="goContentsCta"
        onClick={() => {
          handleGoToContentsClick();
        }}
      >
        Go To Contents
      </button>
    </div>
  );
};

export default ContentTop;
