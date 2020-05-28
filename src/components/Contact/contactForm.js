import React from 'react';
import './contact.css';

function ContactForm() {
  return (
    <div id="contact">
      <div className="contact-left-div">
        <div className="flexbox">
          <h3>CONTACT</h3>
        </div>
        <div className="own-address">
          <span>Shobhit5@hotmail.com</span>
        </div>
        <div className="own-address">
          <span>+31 644477939</span>
        </div>
      </div>
      <form>
        <div className="contact-right-div">
          <label className="contact-label">
            <input
              className="contact-input"
              type="name"
              aria-label="name"
              placeholder="Name"
            />
          </label>
          <label className="contact-label">
            <input
              className="contact-input"
              type="email"
              aria-label="name"
              placeholder="Email"
            />
          </label>

          <label className="contact-label">
            <input
              className="contact-input"
              type="text"
              aria-label="name"
              placeholder="Subject"
            />
          </label>
          <label className="contact-label">
            <textarea
              style={{ marginTop: '20px', height: '100px' }}
              className="contact-input"
              type="email"
              aria-label="name"
              placeholder="Message"
            />
          </label>
          <div className="flexbox" style={{ alignItems: 'start' }}>
            <button type="submit" className="contact-form-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
