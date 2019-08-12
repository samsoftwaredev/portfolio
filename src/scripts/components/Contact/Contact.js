import React from "react";

const contact = props => {
  return (
    <form onSubmit={props.send}>
      <h1 className="Landing_primary-font">Contact Me</h1>
      <div className="Row">
        <div className="Row_md-6">
          <div>
            <label>Like what you see? Send me a message</label>
            <textarea
              rows="14"
              className="Form-text"
              placeholder="Type here..."
              value={props.form.body}
            />
          </div>
        </div>

        <div className="Row_md-6">
          <div>
            <label>Name:</label>
            <input
              className="Form-text"
              placeholder="Your full name"
              value={props.form.name}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              className="Form-text"
              placeholder="Your email"
              value={props.form.email}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              className="Form-text"
              placeholder="Phone number (optional)"
              value={props.form.phone}
            />
          </div>
          <div>
            <label>LinkedIn URL:</label>
            <input
              className="Form-text"
              placeholder="LinkedIn profile URL (optional)"
              value={props.form.linkedInURL}
            />
          </div>
        </div>
        <button className="Button Button_danger">Send</button>
      </div>
    </form>
  );
};

export default contact;
