import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";
const INITIAL_STATE = {
  darkMode: false,
};
export const DarkModeContext = createContext(INITIAL_STATE);
export const DarkModeContextProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
