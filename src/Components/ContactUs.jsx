import React from "react";
import "./ContactUs.css";
import { HiOutlineMail } from "react-icons/hi";
import { SiMessenger } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

const ContactUs = () => {
  return (
    <div id="contactus">
      <h5 className="ofrz">Get in touch</h5>
      <h2 className="srvc">Contact Us</h2>
      <div className="container us_container">
        <div className="contact_options">
          <article className="us">
            <HiOutlineMail />
            <h5>Email</h5>
            <strong>
              meharjunaid
              <br />
              950@gmail.com
            </strong>
            <br />
            <a href="mailto:meharjunaid950@gmail.com">Send a message</a>
          </article>
          <br />
          <br />
          <article className="us">
            <SiMessenger />
            <h5>Messenger</h5>
            <strong>johnny prince</strong>
            <br />
            <a href="https://m.me/ernest.acheiver">Send a message</a>
          </article>
          <br />
          <br />
          <article className="us">
            <SiWhatsapp />
            <h5>Whatsapp</h5>
            <strong>+923234856231</strong>
            <br />
            <a href="https://api.whatsapp.com/send?phone=+923234856231">
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="emil" name="email" placeholder="Your Email" required />
          <textarea name="Message" placeholder="Message" rows="3"></textarea>
          <button
            type="button"
            target="_blank"
            id="f4"
            className="butn11 btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
