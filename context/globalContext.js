import { createContext, useReducer, useContext } from "react";

//Define Conext
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    case "CURSOR_STYLES": {
      return {
        ...state,
        cursorStyles: action.cursorStyles,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: false,
    // cursorStyles: [
    //   "slider-hover",
    //   "slider-drag",
    //   "text",
    //   "link",
    //   "hamburger",
    //   "default",
    // ],
    cursorStyles: "default",
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//custom hooks for when we want to use our global state
export const useGlobalStateContext = () => useContext(GlobalStateContext);

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
