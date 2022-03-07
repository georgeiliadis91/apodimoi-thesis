import React, { useState } from "react";

const contact = () => {
  const [contactFormData, setContactFormData] = useState({
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(creds));
  };

  const onChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className="pageTitle">Φορμα Επικοινωνίας</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2 className="form-title">Συμπληρώστε το μήνυμα σας</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={contactFormData.email}
          onChange={onChange}
          required
        />
        <label htmlFor="message">Your Message:</label>
        <textarea
          name="message"
          type="text"
          id="message"
          placeholder="Enter your message"
          value={contactFormData.message}
          onChange={onChange}
          required
          rows={16}
        ></textarea>
        <button className="form-submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contact;
