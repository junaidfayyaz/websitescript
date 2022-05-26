import React from 'react'
import "./Contact.css"
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg"
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
const Contact = () => {
  return (
    <div id="contact">
      <h5 className="ofrz">What i have</h5>
      <h2 className="srvc">My Section</h2>
      <div className="container contact_container">
        <article className="cont">
          <div>
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <h3 className="port">This is a portfolio item</h3>
          <a href="https://github.com" target="_blank">
            <button type="button" target="_blank" className="butn11 btn-primary">
              Github
            </button>
          </a>
          <a href="https://dribble.com" target="_blank">
            <button type="button" target="_blank" className="butn22 btn-primary">
              LiveDemo
            </button>
          </a>
        </article>
        <article className="cont">
          <div>
            <img src={img2} alt="" className="img-fluid" />
          </div>
          <h3 className="port">This is a portfolio item</h3>
          <a href="https://github.com" target="_blank">
            <button type="button" target="_blank" className="butn11 btn-primary">
              Github
            </button>
          </a>
          <a href="https://dribble.com" target="_blank">
            <button type="button" target="_blank" className="butn22 btn-primary">
              LiveDemo
            </button>
          </a>
        </article>
        <article className="cont">
          <div>
            <img src={img3} alt="" className="img-fluid" />
          </div>
          <h3 className="port">This is a portfolio item</h3>
          <a href="https://github.com" target="_blank">
            <button type="button" target="_blank" className="butn11 btn-primary">
              Github
            </button>
          </a>
          <a href="https://dribble.com" target="_blank">
            <button type="button" target="_blank" className="butn22 btn-primary">
              LiveDemo
            </button>
          </a>
        </article>
        <article className="cont">
          <div>
            <img src={img4} alt="" className="img-fluid" />
          </div>
          <h3 className="port">This is a portfolio item</h3>
          <a href="https://github.com" target="_blank">
            <button type="button" target="_blank" className="butn11 btn-primary">
              Github
            </button>
          </a>
          <a href="https://dribble.com" target="_blank">
            <button type="button" target="_blank" className="butn22 btn-primary">
              LiveDemo
            </button>
          </a>
        </article>
        <article className="cont">
          <div>
            <img src={img5} alt="" className="img-fluid" />
          </div>
          <h3 className="port">This is a portfolio item</h3>
          <a href="https://github.com" target="_blank">
            <button type="button" target="_blank" className="butn11 btn-primary">
              Github
            </button>
          </a>
          <a href="https://dribble.com" target="_blank">
            <button type="button" target="_blank" className="butn22 btn-primary">
              LiveDemo
            </button>
          </a>
        </article>
        <article className="cont">
          <div>
            <img src={img6} alt="" className="img-fluid" />
          </div>
          <h3 className="port">This is a portfolio item</h3>
          <a href="https://github.com" target="_blank">
            <button type="button" target="_blank" className="butn11 btn-primary">
              Github
            </button>
          </a>
          <a href="https://dribble.com" target="_blank">
            <button type="button" target="_blank" className="butn22 btn-primary">
              LiveDemo
            </button>
          </a>
        </article>
      </div>
    </div>
  );
}

export default Contact