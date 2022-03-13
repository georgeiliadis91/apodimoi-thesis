import React, { useState, useContext } from "react";
import { verifyLogin, cookieStorage, verifyPasswordsMatch } from "../utils";
import { useRouter } from "next/router";
import { UserContext } from "../store/store";
import axios from "axios";

const initState = {
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [err, setErrors] = useState("");
  const Router = useRouter();
  const { useSetLogged } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      verifyLogin(creds.email, creds.password) &&
      verifyPasswordsMatch(creds.password, creds.password2)
    ) {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/auth/local/register", {
          email: creds.email,
          username: creds.email,
          password: creds.password,
        })
        .then((response) => {
          cookieStorage.set("jwtToken", response.data.jwt);
          useSetLogged(response.data.jwt);
          Router.replace("/users/me");
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error);
          setErrors(
            error?.response?.data?.data[0]?.messages[0]?.message ||
              "Invalid Credentials please try again"
          );
        });
    } else {
      setErrors("Please check your data once more");
    }
    setCreds(initState);
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2 className="form-title">Register</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
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
          required
          minLength={8}
        />
        <label htmlFor="password">Confirm Password:</label>
        <input
          type="password"
          name="password2"
          id="password2"
          placeholder="Confirm your password"
          value={creds.password2}
          onChange={onChange}
          required
          minLength={8}
        />
        {err && <span className="formErrors">{err}</span>}
        <button className="form-submitBtn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
