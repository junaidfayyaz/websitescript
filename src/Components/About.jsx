import React from "react";
import "./About.css";
import AboutImg from "../Images/about.jpg";
import { IoLogoOctocat } from "react-icons/io";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
const About = () => {
  return (
    <div id="about">
      <h5 id="go">Get to Know</h5>
      <h2 id="abou">About Me</h2>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-5" >
            <img
              src={AboutImg}
              alt="about"
              id="about-img"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6" id="about-2">
            <div id="sb">
              <div className="ios" >
                <a href="#" className="io">
                  <IoLogoOctocat />
                </a>
                <h5 id="exp">Experience</h5>
                <p>7 Month </p>
              </div>

              <div className="ios" id="a3">
                <a href="#" className="io" >
                  <AiOutlineUsergroupDelete />
                </a>
                <h5>Fresh</h5>
                <p>Practice </p>
              </div>

              <div className="ios" id="a4">
                <a href="#" className="io">
                  <FaProductHunt />
                </a>
                <h5>Projects</h5>
                <p>20+ projects </p>
              </div>
            </div>
            <div className="row"id="a2" >
              <div className="col-md-12">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt reprehenderit consequuntur commodi facilis aliquam
                  id, distinctio nesciunt odit obcaecati nisi consequatur
                  aspernatur aliquid magni tempore ducimus, sequi atque
                  excepturi earum
                </p>
                <br />
                <a href="#" type="button" id="butn2">
                  Let's talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="about" className="img-fluid" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <article className="ios">
              <IoLogoOctocat className="io" />
              <h5>Experience</h5>
              <small>7+ Month Working</small>
            </article>
            {/* <div className="ios" id="a3">
                <a href="#" className="io" >
                  <AiOutlineUsergroupDelete />
                </a>
                <h5>Fresh</h5>
                <p>Practice </p>
              </div> */}
            <article className="ios" id="a3">
              <AiOutlineUsergroupDelete className="io" />
              <h5>Practice</h5>
              <small>Fresh</small>
            </article>
            <article className="ios" id="a4">
              <FaProductHunt className="io" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea tenetur
            qui recusandae similique, voluptatem vero. Quod, dolore nemo nam,
            error accusamus animi recusandae expedita maiores, rerum qui
            similique sit quisquam.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
