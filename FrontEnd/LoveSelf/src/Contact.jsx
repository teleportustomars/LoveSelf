import React from 'react';

const ContactForm = () => {
  return (
    <div id="contactForm" className="pageContent">
    <h2>Contact LoveSelf</h2>
    <h3>have a question? want to leave a comment? fill out the form below and I'll get back to you as soon as possible!</h3>
    <form id="contactForm">
      <label>Name:</label>
      <input type="text" name="name" />
      <label>Email:</label>
      <input type="email" name="email" />
      <label>Message:</label>
      <textarea name="message" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;