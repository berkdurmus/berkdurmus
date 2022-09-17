import React, { forwardRef } from "react";

import "./Work.css";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="contactHolder">
      <div className="contactTitle">Contact</div>
      <div className="indivualContactTitle">
        Send message to <a>&nbsp;hello@berkdurmus.com </a>
      </div>
      <form className="form">
        <input className="formInput" type="text" placeholder="Name" />
        <input className="formInput" type="email" placeholder="Email" />
        <div className="textAreaWrapper">
          <textarea
            multiple={true}
            className="formInput2"
            rows="4"
            cols="100"
            type="text"
            placeholder="Message"
          />
        </div>
      </form>
      <button className="actionContact"> Send Message</button>
    </div>
  );
});

export default Contact;
