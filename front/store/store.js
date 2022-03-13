import React, { createContext, useEffect, useReducer } from "react";
import { userDataReducer } from "./reducers";
import { setLogged, removeLogged } from "./actions";
import { cookieStorage } from "../utils";

const defaultState = {
  userLoggedIn: false,
};

export const UserContext = createContext();

export default function Globalstate({ children }) {
  const [data, dispatch] = useReducer(userDataReducer, defaultState);

  useEffect(() => {
    const userToken = cookieStorage.get("jwtToken");
    if (userToken) {
      dispatch(setLogged(userToken));
    }
  }, []);

  const useSetLogged = (token) => {
    dispatch(setLogged(token));
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
