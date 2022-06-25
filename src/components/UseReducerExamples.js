import React, { useReducer } from "react";
import ContentTop from "./ContentTop";
import DataFetchingReducer from "./DataFetchingReducer";
import SharedCounter from "./SharedCounter";

const INCREMENT_COUNTER = "counter/increment";
const DECREMENT_COUNTER = "counter/decrement";
const RESET_COUNTER = "counter/reset";
const initialCounterState = 0;
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + action.value;
    case DECREMENT_COUNTER:
      return state - action.value;
    case RESET_COUNTER:
      return initialCounterState;
    default:
      return state;
  }
};

const UseReducerExamples = ({ handleGoToContentsClick }) => {
  const [countOne, countOneDispatch] = useReducer(
    counterReducer,
    initialCounterState
  );
  const [countTwo, countTwoDispatch] = useReducer(
    counterReducer,
    initialCounterState
  );
  return (
    <div>
      <ContentTop
        contentHeading="UseStateExamples: "
        handleGoToContentsClick={handleGoToContentsClick}
      />
      <div id="reducer-examples">
        <div id="counter-one">
          <p>Counter One: {countOne}</p>
          <button
            onClick={() => {
              countOneDispatch({ type: INCREMENT_COUNTER, value: 1 });
            }}
          >
            INCREMENT ONE
          </button>
          <button
            onClick={() => {
              countOneDispatch({ type: DECREMENT_COUNTER, value: 1 });
            }}
          >
            DECREMENT ONE
          </button>
          <button
            onClick={() => {
              countOneDispatch({ type: RESET_COUNTER });
            }}
          >
            RESET
          </button>
        </div>
        <hr />
        <div id="counter-two">
          <p>Counter Two: {countTwo}</p>
          <button
            onClick={() => {
              countTwoDispatch({ type: INCREMENT_COUNTER, value: 2 });
            }}
          >
            INCREMENT TWO
          </button>
          <button
            onClick={() => {
              countTwoDispatch({ type: DECREMENT_COUNTER, value: 2 });
            }}
          >
            DECREMENT TWO
          </button>
          <button
            onClick={() => {
              countTwoDispatch({ type: RESET_COUNTER });
            }}
          >
            RESET
          </button>
        </div>
        <hr />
        <div id="shared-counter">
          <SharedCounter />
        </div>
        <hr />
        <div id="data-reducer">
          <DataFetchingReducer />
        </div>
      </div>
    </div>
  );
};

export default UseReducerExamples;
