import React, {useRef, useState} from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import {SyncLoader} from 'react-spinners';

export default function Contact () {
  const [loading, setLoading] = useState (false);
  const colorBgVariant = '#2c2c6c';

  const formref = useRef ();
  const sendEmail = e => {
    setLoading (true);
    e.preventDefault ();

    emailjs
      .sendForm (
        `service_ja1q60w`,
        `template_pmfvkv1`,
        formref.current,
        `wto91jF_CoA6lU7vz`
      )
      .then (
        result => {
          console.log (result.text);
          setLoading (false);
        },
        error => {
          console.log (error.text);
          setLoading (true);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>as;dkfllkd@gmail.com</h5>
            <a href="mailto:a;skdjfkj@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>as;dkfllkd@gmail.com</h5>
            <a href="mailto:a;skdjfkj@gmail.com">Send a Message</a>
          </article>
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>as;dkfllkd@gmail.com</h5>
            <a href="mailto:a;skdjfkj@gmail.com">Send a Message</a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={formref} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" value="Send" className="btn btn-primary">
            {loading
              ? <SyncLoader size={6} color={colorBgVariant} />
              : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
