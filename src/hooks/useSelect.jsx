import { useSelector } from "react-redux";

export const useSelect = (stateName) => {
  const state = useSelector((states) => {
    return states[stateName];
  });
  return state;
};
