//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "jumbotron header text-center">
		<h4>Click on any image to earn a point</h4> 
	<h5>Don't click on the same picture more than once. Click all 12 pics, and you win.</h5>
	</header>
);
export default Jumbotron;