import React, { useState } from "react";

const Register = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [err, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (creds.password !== creds.password2) {
      setErrors("Passwords do not match");
      return;
    }

    alert(JSON.stringify(creds));
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
        <button
          className="form-submitBtn"
          type="submit"
          disabled={err ? true : false}
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
