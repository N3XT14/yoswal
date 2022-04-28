import React, { useState, useCallback } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  const emailID = "yashoswal14@gmail.com";
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
  };
  const [contactForm, setContactForm] = useToggle();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function handleSubmit() {
    setLoading(true);

    const contact = {
      username: formData.username,
      email: formData.email,
      message: formData.message,
    };

    const response = await fetch("http://localhost:5000/addContactData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    setLoading(false);
    setIsFormSubmitted(true);
  }

  return (
    <>
      <h2 className="head-text app__contact-head">
        Interested in collaborating or investing?
      </h2>
      <h2 className="app__contact-head">
        I’m always open for opportunities and work !!!
      </h2>
      <button
        type="button"
        className="app__contact-button"
        onClick={setContactForm}
      >
        Start Conversation
      </button>

      {contactForm && (
        <>
          <h2 className="head-text app__form-head">
            Take a coffee & chat with me
          </h2>
          <div className="app__contact-cards">
            <div className="app__contact-card ">
              <img src={images.email} alt="email" />
              <a href={`mailto:${emailID}`} className="p-text">
                {emailID}
              </a>
            </div>
          </div>
          {!isFormSubmitted ? (
            <div className="app__contact-form app__flex">
              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={username}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="app__flex">
                <input
                  className="p-text"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text app__formdata-resp">
                Thank you for getting in touch!
              </h3>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__contactbg"
);
