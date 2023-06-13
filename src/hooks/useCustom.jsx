import { useState } from "react";

export const useCustom = (reducer, initValue) => {
  const [state, setState] = useState(initValue);
  const dispatch = (action) => {
    const newState = reducer(state, action);
    setState(newState);
  };
  return [state, dispatch];
};
