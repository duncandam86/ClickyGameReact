//sets up the reusable Navbar component
import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top ">
      {props.message}
    </nav>
  )
}

export default Navbar;