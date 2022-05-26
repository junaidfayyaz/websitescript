import React from 'react'
import './Image.css'
import ME from "../Images/ME.jpg"
const Image = () => {
  return (
    <div className='me'>
          <img src={ME} alt="Winter" id='im_a' className="img-fluid"
              
          />
        </div>
  )
}

export default Image;