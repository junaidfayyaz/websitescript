import React from 'react';
import './Headersocials.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
const Headersocials = () => {
  return (
    <div>
      <div className='bs_w'>
        <a href="https://linkedin.com" className="bs">
          <BsLinkedin />
        </a>
        <a href="https://github.com" className="bs">
          <BsGithub />
        </a>
        <a href="https://dribble.com" className="bs">
          <FiDribbble />
        </a>
      </div>
    </div>
  );
}

export default Headersocials