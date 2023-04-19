import React from "react";

const Card = ({ card }) => {
  const { id, pic, name, clicked } = card;
  return (
    <div>
      <img src={pic} alt={name}></img>
      <p>{name}</p>
    </div>
  );
};

export default Card;
