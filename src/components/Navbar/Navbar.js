//sets up the reusable Navbar component
import React from "react";
import "./Navbar.css";

const Navbar = props => {
    return(
       <nav className="navbar navbar-default navbar-fixed-top">
    <ul>
      <li className="itemLeft">Test Your Memory</li>
      <li className="itemCenter">Message: {props.message}</li>
      <li className="itemRight">Score: {props.score}</li>
      <li className="itemRight">Top Score: {props.topScore}</li>

    </ul>
  </nav>
    )
  }

export default Navbar;