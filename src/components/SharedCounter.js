import React, { useReducer, createContext, useContext } from "react";

const counterContext = createContext();
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

const ComponentA = () => {
  const counterAContext = useContext(counterContext);
  return (
    <>
      <span>ComponetA: {counterAContext.count}</span>
      <button
        onClick={() => {
          counterAContext.counterDispatch({
            type: INCREMENT_COUNTER,
            value: 1,
          });
        }}
      >
        INCREMENT ONE
      </button>
      <button
        onClick={() => {
          counterAContext.counterDispatch({
            type: DECREMENT_COUNTER,
            value: 1,
          });
        }}
      >
        DECREMENT ONE
      </button>
      <button
        onClick={() => {
          counterAContext.counterDispatch({ type: RESET_COUNTER });
        }}
      >
        RESET
      </button>
      <br />
    </>
  );
};

const ComponentB = () => {
  return <ComponentC />;
};

const ComponentC = () => {
  const counterCContext = useContext(counterContext);
  return (
    <>
      <span>ComponetC: {counterCContext.count}</span>
      <button
        onClick={() => {
          counterCContext.counterDispatch({
            type: INCREMENT_COUNTER,
            value: 1,
          });
        }}
      >
        INCREMENT ONE
      </button>
      <button
        onClick={() => {
          counterCContext.counterDispatch({
            type: DECREMENT_COUNTER,
            value: 1,
          });
        }}
      >
        DECREMENT ONE
      </button>
      <button
        onClick={() => {
          counterCContext.counterDispatch({ type: RESET_COUNTER });
        }}
      >
        RESET
      </button>
      <br />
    </>
  );
};

const ComponentD = () => {
  return <ComponentE />;
};
const ComponentE = () => {
  return <ComponentF />;
};
const ComponentF = () => {
  const counterFContext = useContext(counterContext);
  return (
    <>
      <span>ComponetF: {counterFContext.count}</span>
      <button
        onClick={() => {
          counterFContext.counterDispatch({
            type: INCREMENT_COUNTER,
            value: 1,
          });
        }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => {
          counterFContext.counterDispatch({
            type: DECREMENT_COUNTER,
            value: 1,
          });
        }}
      >
        DECREMENT
      </button>
      <button
        onClick={() => {
          counterFContext.counterDispatch({ type: RESET_COUNTER });
        }}
      >
        RESET
      </button>
      <br />
    </>
  );
};

const SharedCounter = () => {
  const [count, counterDispatch] = useReducer(
    counterReducer,
    initialCounterState
  );
  return (
    <>
      <p>Shared Counter</p>
      <counterContext.Provider
        value={{ count: count, counterDispatch: counterDispatch }}
      >
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </counterContext.Provider>
    </>
  );
};

export default SharedCounter;
