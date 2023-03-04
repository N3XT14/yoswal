import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

const Contact = () => {
  const emailID = "yashoswal14@gmail.com";

  // Toggle Contact Form
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
  };
  const [contactForm, setContactForm] = useToggle();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData) {
    setLoading(true);
    const contact = {
      username: formData.username,
      email: formData.email,
      message: formData.message,
    };

    const response = await fetch("https://yoswal-production.up.railway.app/addContactData", {
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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <h2 className="head-text app__contact-head">
        Interested in collaborating or investing?
      </h2>
      <h2 className="main-text app__contact-head">
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
            <form
              className="app__contact-form app__flex"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 2,
                      message: "Username cannot be empty. Please provide your username"
                    }
                  })}
                />
              </div>
              {errors.username && (
                <span className="app__invalid">{errors.username.message}</span>
              )}
              <div className="app__flex">
                <input
                  className="p-text"
                  type="text"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Please provide your email",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Please provide a valid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <span className="app__invalid">{errors.email.message}</span>
              )}
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  {...register("message")}
                />
              </div>
              <button type="submit" className="p-text app__formdata-button">
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </form>
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
