import React, { useState, createContext } from "react";
import { destroyCookie } from "nookies";

export const UserContext = createContext();

export default function Globalstate({ isLoggedIn, children }) {
  const [logged, setLogged] = useState(isLoggedIn);

  const logOut = () => {
    setLogged(false);
    destroyCookie(null, "jwt");
  };

  const logIn = () => {
    setLogged(true);
  };

  return (
    <UserContext.Provider value={{ logged, logOut, logIn }}>
      {children}
    </UserContext.Provider>
  );
}
