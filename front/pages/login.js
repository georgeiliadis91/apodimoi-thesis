import React, { useState, useContext } from "react";
import { verifyLogin, cookieStorage } from "../utils";
import axios from "axios";
import { UserContext } from "../store/store";

const Login = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const { useSetLogged } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verifyLogin(creds.email, creds.password)) {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/auth/local", {
          identifier: creds.email,
          password: creds.password,
        })
        .then((response) => {
          // Handle success.
          console.log("User profile", response.data.user);
          console.log("User token", response.data.jwt);
          cookieStorage.set("jwtToken", response.data.jwt);
          useSetLogged();
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
          setErr(
            error?.response?.data?.data[0]?.messages[0]?.message ||
              "Invalid Credentials please try again"
          );
        });
    } else {
      setErr("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={creds.email}
          onChange={onChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={creds.password}
          onChange={onChange}
        />
        {err && <span className="formErrors">{err}</span>}
        <button className="form-submitBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
