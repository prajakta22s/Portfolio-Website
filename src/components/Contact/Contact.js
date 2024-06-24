import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nvm80rs',
        'template_jqkjtnp',
        form.current,
        'BgK88b9NQmY_S5MfV'
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
    <section className="contact-section" id="contact">
      <div className="contact-title">Contact</div>
      <div className="contact-divider"></div>
      <p className="contact-description">Feel free to reach out to me for any questions or opportunities!</p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="contact-form-group">
          <label className="contact-label">Name</label>
          <input type="text" placeholder="Your Name" name="user_name" className="contact-input" />
        </div>
        <div className="contact-form-group">
          <label className="contact-label">Email</label>
          <input type="email" placeholder="Your Email" name="user_email" className="contact-input" />
        </div>
        <div className="contact-form-group">
          <label className="contact-label">Message</label>
          <textarea name="message" placeholder="Message" className="contact-textarea"></textarea>
        </div>
        <input type="submit" value="Submit" className="contact-button" />
      </form>
      {sent && <p className="contact-success">Your message has been sent successfully!</p>}
      {error && <p className="contact-error">There was an error sending your message: {error}</p>}
    </section>
  );
};

export default Contact;
