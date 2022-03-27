import React, { useState, useContext } from "react";
import { verifyLogin, cookieStorage, verifyPasswordsMatch } from "../utils";
import { useRouter } from "next/router";
import { UserContext } from "../store/store";
import axios from "axios";

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
    island: Object.keys(data.names)[0],
    dimotiki_enotita: Object.keys(data.names)[0],
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
          profile_data: {
            name: creds.name,
            surname: creds.surname,
            island: creds.island,
            dimotiki_enotita: creds.dimotiki_enotita,
          },
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
    console.log("here", e);
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

        <label for="island">Νησί:</label>

        <select name="island" id="island" required onChange={onChange}>
          {Object.keys(data.names).map((key, index) => {
            return (
              <option
                className="island"
                key={key}
                value={key}
                selected={index === 0}
              >
                {key}
              </option>
            );
          })}
        </select>

        <label for="dimotiki_enotita">Δημοτική Ενότητα:</label>
        <select
          name="dimotiki_enotita"
          id="dimotiki_enotita"
          // disabled if no island selected
          disabled={!creds.island}
          required
          onChange={onChange}
        >
          {data.names[creds.island] && (
            <>
              <option className="island" value={creds.island}>
                {creds.island}
              </option>
              <>
                {Object.values(data.names[creds.island]).map((val) => {
                  return (
                    <option className="dimotiki_enotita" key={val} value={val}>
                      {val}
                    </option>
                  );
                })}
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
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/dimotikes-enotites"
  );

  const data = await res.json();

  return {
    props: { data },
  };
}

export default Register;
