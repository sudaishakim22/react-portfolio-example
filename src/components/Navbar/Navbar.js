import React from "react";
import "./navbar.scss";
import { Person, Mail } from "@material-ui/icons";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>0812110232</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>sudais@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line__1"></span>
            <span className="line__2"></span>
            <span className="line__3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
