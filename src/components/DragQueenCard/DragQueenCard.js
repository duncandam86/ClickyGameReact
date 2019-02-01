//sets up the reusable DragqueenCard component
import React from "react";
import "./DragQueenCard.css";

//pass the image into each card so all 12 are rendered
const dragQueenCard = props => (
    //onClick makes the card clickable
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.id} src={require("./images/" + props.image)} />
    </div>
  </div>
);

export default dragQueenCard;