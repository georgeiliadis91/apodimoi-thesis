import React, { useState, useContext } from "react";
import { verifyLogin, verifyPasswordsMatch } from "../utils";
import { useRouter } from "next/router";
import { UserContext } from "../store/store";
import axios from "axios";
import { setCookie } from "nookies";

const initState = {
  email: "",
  password: "",
  password2: "",
  name: "",
  surname: "",
  island: "",
  dimotiki_enotita: "",
};

const Register = ({ data }) => {
  const [creds, setCreds] = useState({
    ...initState,
    island: Object.keys(data.attributes.toponimia)[0],
    dimotiki_enotita: Object.keys(data.attributes.toponimia)[0],
  });
  const [err, setErrors] = useState("");

  const Router = useRouter();
  const { logIn } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      verifyLogin(creds.email, creds.password) &&
      verifyPasswordsMatch(creds.password, creds.password2)
    ) {
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/auth/local/register", {
          email: creds.email,
          username: creds.email,
          password: creds.password,
          profile_data: {
            name: creds.name,
            surname: creds.surname,
            country: "Greece",
            island: creds.island,
            dimotiki_enotita: creds.dimotiki_enotita,
          },
        })
        .then((response) => {
          setCookie(null, "jwt", response.data.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: "/",
          });
          logIn(response.data.jwt);
          Router.replace("/users/me");
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          setErrors(error?.response?.error?.messages || "An error occurred:");
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

        <label htmlFor="Name">Ονομα</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={creds.name}
          onChange={onChange}
        />

        <label htmlFor="Surname">Επίθετο:</label>
        <input
          required
          type="text"
          name="surname"
          id="surname"
          placeholder="Enter your surname"
          value={creds.surname}
          onChange={onChange}
        />

        <label htmlFor="island">Νησί:</label>

        <select name="island" id="island" required onChange={onChange}>
          {Object.keys(data.attributes.toponimia).map((key, index) => {
            return (
              <option
                className="island"
                key={key}
                value={key}
                defaultValue={index === 0}
              >
                {key}
              </option>
            );
          })}
        </select>

        <label htmlFor="dimotiki_enotita">Δημοτική Ενότητα:</label>
        <select
          name="dimotiki_enotita"
          id="dimotiki_enotita"
          // disabled if no island selected
          disabled={!creds.island}
          required
          onChange={onChange}
        >
          {data.attributes.toponimia[creds.island] && (
            <>
              <option className="island" value={creds.island}>
                {creds.island}
              </option>
              <>
                {Object.values(data.attributes.toponimia[creds.island]).map(
                  (val) => {
                    return (
                      <option
                        className="dimotiki_enotita"
                        key={val}
                        value={val}
                      >
                        {val}
                      </option>
                    );
                  }
                )}
              </>
            </>
          )}
        </select>
        <br />

        {err && <span className="formErrors">{err}</span>}

        <br />
        <button className="form-submitBtn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/toponimia");
  const { data } = await res.json();

  return {
    props: { data },
  };
}

export default Register;
