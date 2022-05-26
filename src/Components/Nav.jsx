import React from 'react'
import "./Nav.css"
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdReport } from "react-icons/md";
const Nav = () => {
  return (
    <div className="icon-m">
      <a href="#" rel="" className="icon">
        <AiOutlineHome />
      </a>
      <a href="#about" className="icon">
        <SiAboutdotme />
      </a>
      <a href="#service" className="icon">
        <MdOutlineMiscellaneousServices />
      </a>
      <a href="#report" className="icon">
        <MdReport />
      </a>
      <a href="#contact" className="icon">
        <RiContactsFill />
      </a>
    </div>
  );
}

export default Nav;