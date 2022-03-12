import React, { createContext, useReducer } from "react";
import { userDataReducer } from "./reducers";
import { setLogged, removeLogged } from "./actions";
import { cookieStorage } from "../utils";

export const UserContext = createContext();

export default function Globalstate({ children }) {
  const [data, dispatch] = useReducer(userDataReducer, []);

  const useSetLogged = () => {
    dispatch(setLogged());
  };

  const useRemoveLogged = () => {
    dispatch(removeLogged());
    cookieStorage.remove("jwtToken");
  };

  return (
    <UserContext.Provider value={{ data, useSetLogged, useRemoveLogged }}>
      {children}
    </UserContext.Provider>
  );
}
