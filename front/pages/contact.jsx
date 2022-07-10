import React, { useState } from "react";
import axios from "axios";
import { isEmail } from "../utils";
import { useTranslations } from "../hooks/useTranslations";

const initState = {
  email: "",
  name: "",
  message: "",
};

const contact = () => {
  const [contactFormData, setContactFormData] = useState(initState);
  const { t } = useTranslations();

  const handleSubmit = (e) => {
    if (
      contactFormData.email &&
      contactFormData.message &&
      contactFormData.name &&
      isEmail(contactFormData.email)
    ) {
      e.preventDefault();
      axios
        .post(process.env.NEXT_PUBLIC_API_URL + "/api/contacts", {
          data: {
            email: contactFormData.email,
            name: contactFormData.name,
            message: contactFormData.message,
          },
        })
        .then((response) => {
          setContactFormData(initState);
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
        });
    }
  };

  const onChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1 className="pageTitle">{t.contactTitle}</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2 className="form-title">{t.contactCTA}</h2>
        <label htmlFor="email">{t.contactEmailLabel}</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={t.contactEmailPlaceholder}
          value={contactFormData.email}
          onChange={onChange}
          required
        />
        <label htmlFor="message">{t.contactNameLabel}</label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder={t.contactNamePlaceholder}
          value={contactFormData.name}
          onChange={onChange}
          required
        />
        <label htmlFor="message">{t.contactMessageLabel}</label>
        <textarea
          name="message"
          type="text"
          id="message"
          placeholder={t.contactMessagePlaceholder}
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
