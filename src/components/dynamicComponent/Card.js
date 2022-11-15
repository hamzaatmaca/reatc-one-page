import React from "react";
import Button from "./Button";

const Card = (props) => {
  const { title, content } = props;
  return (
    <React.Fragment>
      <div className="card_container">
        <div className="card_title">{title}</div>
        <div className="card_content">{content}</div>
        <div className="card_buttons">
          <Button
            backgroundColor="#FFE4E4"
            textColor="#E42626"
            text="Learn More"
          />
          <Button
            backgroundColor="#E42626"
            textColor="white"
            text="Find a Dealer"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
