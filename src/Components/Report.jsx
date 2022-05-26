import React from 'react'
import "./Report.css"
import {AiTwotoneCheckCircle} from "react-icons/ai"
const Report = () => {
  return (
    <div id="report">
      <h5 className="skill" id="sk">
        What skill i have
      </h5>
      <h2 className="skill" id="ex">
        My Experience
      </h2>

      <div className="container experience">
        <div className="frontend">
          <h3 className="h3">Front-End Development</h3>
          <div className="handle_exp">
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>HTML</h4>
                <small className="text">Experience</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>CSS</h4>
                <small className="text">Experience</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>BootStrap</h4>
                <small className="text">Experience</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>JQurey</h4>
                <small className="text">Experience</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>JavaScript</h4>
                <small className="text">Experience</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>React</h4>
                <small className="text">Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend">
          <h3 className="h3">Back-End Development</h3>
          <div className="handle_exp">
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>Node</h4>
                <small className="text">Experience</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>MangoDB</h4>
                <small className="text">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>PHP</h4>
                <small className="text">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>MySQL</h4>
                <small className="text">Intermediate</small>
              </div>
            </article>
            <article className="exp-detail">
              <AiTwotoneCheckCircle className='exp_icon' />
              <div className="new_changes">
                <h4>Python</h4>
                <small className="text">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report