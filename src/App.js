import { useState } from "react";
import "./App.css";
import CardList from "./components/cardList";
import sportData from "./helper";

function App() {
  const [currentCards, setCurrentCards] = useState(sportData);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const shuffleDeck = () => {
    let shuffled = currentCards
      .map((value) => ({
        value,
        sortValue: Math.random(),
      }))
      .sort((a, b) => a.sortValue - b.sortValue)
      .map(({ value }) => value);
    setCurrentCards(shuffled);
  };
  return (
    <div className="App">
      <button onClick={shuffleDeck}>Shuffle cards!</button>
      <CardList cards={currentCards} />
    </div>
  );
}

export default App;
