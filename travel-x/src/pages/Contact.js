import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kk6m644', 'template_2p233z3', form.current, '-kb53h4fwoyf_X3ig')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <div>
      <h1 className="ContactHeader">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail} className = "row" style = {{ margin: "25px 85px 75px 100px"}}>
        <label>Name:</label>
        <input type="text" name="user_name" className = "form-control"/>
        <label>Email:</label>
        <input type="email" name="user_email" className = "form-control"/>
        <label>Subject:</label>
        <input type="text" name="subject" className = "form-control"/>
        <label>Message:</label>
        <textarea name="message" rows = "4" className="form-control" />
        <input type="submit" value="Send" className = "form-control btn btn-primary "/>
      </form>
    </div>
  );
};

export default Contact;
