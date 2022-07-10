import React, { useState, useContext } from "react";
import { verifyLogin, verifyPasswordsMatch } from "../utils";
import { useRouter } from "next/router";
import { UserContext } from "../store/store";
import countryList from "../json-data-files/countryList.json";
import axios from "axios";
import { useTranslations } from "../hooks/useTranslations";
import { setCookie } from "nookies";

const initState = {
  email: "",
  password: "",
  password2: "",
  name: "",
  surname: "",
  island: "",
  dimotiki_enotita: "",
  current_country: "",
};

const Register = ({ data }) => {
  const [creds, setCreds] = useState({
    ...initState,
    island: Object.keys(data.attributes.toponimia)[0],
    dimotiki_enotita: Object.keys(data.attributes.toponimia)[0],
  });
  const { t } = useTranslations();
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
            current_country: creds.current_country,
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
        <h2 className="form-title">{t.registerTitle}</h2>

        <label htmlFor="email">{t.registerEmail}:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder={t.registerEmailPlaceholder}
          value={creds.email}
          onChange={onChange}
        />

        <label htmlFor="password">{t.registerPassword}:</label>
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

        <label htmlFor="password">{t.registerPasswordPlaceholder}:</label>
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

        <label htmlFor="Name">{t.registerName}</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder={t.registerNamePlaceholder}
          value={creds.name}
          onChange={onChange}
        />

        <label htmlFor="Surname">{t.registerSurname}:</label>
        <input
          required
          type="text"
          name="surname"
          id="surname"
          placeholder={t.registerSurnamenPlaceholder}
          value={creds.surname}
          onChange={onChange}
        />

        <label htmlFor="island">{t.registerIsland}:</label>

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

        <label htmlFor="dimotiki_enotita">{t.registerMunicipality}:</label>
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
                        defaultValue={val === creds.dimotiki_enotita}
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

        <label htmlFor="dimotiki_enotita">{t.registerCountry}:</label>
        <select
          name="current_country"
          id="current_country"
          required
          onChange={onChange}
        >
          {countryList.map(({ label }, index) => {
            return (
              <option className="island" key={label} value={label}>
                {label}
              </option>
            );
          })}
        </select>
        <br />

        {err && <span className="formErrors">{err}</span>}

        <br />
        <button className="form-submitBtn" type="submit">
          {t.registerBtn}
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
