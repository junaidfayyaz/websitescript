import React from 'react'
import "./Footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="" className="footer__logo">EGATOR</a>
        <ul className='para'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#report">Experience</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__socials">
          <a href="https://facebook.com">
            <BsFacebook />
          </a>
          <a href="https://intagram.com">
            <BsInstagram />
          </a>
          <a href="https://whatsapp.com">
            <BsWhatsapp />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer