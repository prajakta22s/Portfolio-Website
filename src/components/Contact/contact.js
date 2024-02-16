import React, { useState, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h98x5yj",
        "template_0ormego",
        form.current,
        "JhiEJe6wfbsXBQP_j"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setError(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-title">Contact</div>
      <div className="header-bar"></div>
      <p>Feel free to reach out to me for any questions or opportunities!</p>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="email">Email Me 💌</label>
        <label>Name</label>
        <input type="text" placeholder="Your Name" name="user_name" />
        <label>Email</label>
        <input type="email" placeholder="Your Email" name="user_email" />
        <label>Message</label>
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Submit" />
      </form>
      {sent && <p>Your message has been sent successfully!</p>}
      {error && <p>There was an error sending your message: {error}</p>}
    </section>
  );
};

export default Contact;
