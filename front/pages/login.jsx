import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { verifyLogin } from "../utils";
import axios from "axios";
import { UserContext } from "../store/store";
import { setCookie } from "nookies";
import { useTranslations } from "../hooks/useTranslations";

const initState = {
  email: "",
  password: "",
};

const Login = ({ data }) => {
  const [creds, setCreds] = useState(initState);
  const Router = useRouter();
  const [err, setErr] = useState("");
  const { logIn } = useContext(UserContext);
  const { t } = useTranslations();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verifyLogin(creds.email, creds.password)) {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/local", {
          identifier: creds.email,
          password: creds.password,
        })
        .then((response) => {
          setCookie(null, "jwt", response.data.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          logIn();
          Router.push("/users/me");
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error?.response);
          setErr(
            error.response.statusText || "Invalid Credentials please try again"
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
        <h2 className="form-title">{t.loginTitle}</h2>
        <label htmlFor="email">{t.loginEmail}:</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder={t.loginEmailPlaceholder}
          value={creds.email}
          onChange={onChange}
        />

        <label htmlFor="password">{t.loginPassword}:</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder={t.loginPasswordPlaceholder}
          value={creds.password}
          onChange={onChange}
        />

        <br />

        {err && <span className="formErrors">{err}</span>}
        <button className="form-submitBtn" type="submit">
          {t.loginBtnLogin}
        </button>
      </form>
    </div>
  );
};

export default Login;
