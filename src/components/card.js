import React from "react";

const Card = ({ card, handleSelection }) => {
  const { id, pic, name } = card;
  const settleSelection = () => {
    handleSelection(id);
  };
  return (
    <div onClick={settleSelection}>
      <img src={pic} alt={name}></img>
      <p>{name}</p>
    </div>
  );
};

export default Card;
