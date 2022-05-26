import React from 'react'
import './CTA.css'
import CV from '../Images/CV.png'

const CTA = () => {
    return (
      <>
        <div className="butn">
          <a href={CV} download type="button" className="butn1">
            Download CV
          </a>
          <a href="#" type="button" className="butn2">
            Let's talk
          </a>
        </div>
        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </>
    );
}

export default CTA