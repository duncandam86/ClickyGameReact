//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
	<header className="jumbotron header text-center">
		<h2>Click on any drag queen to earn a point</h2>
		<h4>Click on the same queen more than once, you will be doomed.</h4>
		<h4>Click all 16 queen, and you win.</h4>
		<p>Score: {props.score}</p>
		<p>Top Score: {props.topScore}</p>
	</header>
);
export default Jumbotron;