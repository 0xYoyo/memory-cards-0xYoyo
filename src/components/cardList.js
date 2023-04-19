import React from "react";
import Card from "./card";

const CardList = ({ cards, handleSelection }) => {
  //console.log(cards);
  const listItems = cards.map((card) => (
    <li key={card.id}>
      <Card card={card} handleSelection={handleSelection} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default CardList;
