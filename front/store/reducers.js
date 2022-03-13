import { cookieStorage } from "../utils";

export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOGGED":
      if (cookieStorage.get("jwtToken")) {
        return {
          ...state,
          userLoggedIn: true,
        };
      }
      return {
        ...state,
        userLoggedIn: false,
      };
    case "REMOVE_LOGGED":
      return {
        ...state,
        userLoggedIn: false,
      };
    default:
      return state;
  }
};
