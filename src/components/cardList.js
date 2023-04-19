import React from "react";
import Card from "./card";

const CardList = ({ cards }) => {
  console.log(cards);
  const listItems = cards.map((card) => (
    <li key={card.id}>
      <Card card={card} />
    </li>
  ));
  return <ul>{listItems}</ul>;
};

export default CardList;
