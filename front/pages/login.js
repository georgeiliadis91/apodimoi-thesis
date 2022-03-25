import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { verifyLogin, cookieStorage } from "../utils";
import axios from "axios";
import { UserContext } from "../store/store";

const initState = {
  email: "",
  password: "",
};

const Login = ({ data }) => {
  const [creds, setCreds] = useState(initState);
  const Router = useRouter();
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
          cookieStorage.set("jwtToken", response.data.jwt);
          useSetLogged(response.data.jwt);
          Router.replace("/users/me");
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
    setCreds(initState);
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
          required
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={creds.email}
          onChange={onChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          value={creds.password}
          onChange={onChange}
        />

        <br />

        {err && <span className="formErrors">{err}</span>}
        <button className="form-submitBtn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
