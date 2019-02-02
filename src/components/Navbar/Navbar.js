//sets up the reusable Navbar component
import React from "react";
import "./Navbar.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top text-center item-center">
      <ul>
        <li className="itemLeft">Test your memory</li>
        <li className="itemCenter">{props.message}</li>
        <li className="itemRight"></li>
      </ul>
    </nav>
  )
}

export default Navbar;