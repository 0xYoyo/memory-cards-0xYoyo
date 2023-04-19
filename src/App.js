import { useState } from "react";
import "./App.css";
import CardList from "./components/cardList";
import sportData from "./helper";

function App() {
  const [currentCards, setCurrentCards] = useState(sportData);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleSelection = (id) => {
    const currentCardsCopy = [...currentCards];
    const cardCopy = currentCardsCopy.find((cardCopy) => cardCopy.id === id);
    if (cardCopy.clicked) {
      resetRound();
    } else {
      cardCopy.clicked = true;
      scoreCheck();
    }
  };

  const scoreCheck = () => {
    setCurrentScore(currentScore + 1);
    const scoreToCompare = currentScore + 1;
    if (scoreToCompare > highScore) {
      setHighScore(scoreToCompare);
    }
    shuffleDeck(currentCards);
  };

  const resetRound = async () => {
    let freshData = currentCards.map((val) => ({
      ...val,
      clicked: false,
    }));
    shuffleDeck(freshData);
    setCurrentScore(0);
  };

  const shuffleDeck = (cardsToShuffle) => {
    let shuffled = cardsToShuffle
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
      <h1>Sports Memory cards</h1>
      <p>The rules are simple</p>
      <p>If you click at a card more than once - You're out</p>
      <p>
        If you manage to remember which ones you already clicked and avoid them
        - You win
      </p>
      <CardList cards={currentCards} handleSelection={handleSelection} />
      <p>Current Score: {currentScore}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default App;

// const resetGame = () => {
//   setCurrentCards(sportData);
//   setCurrentScore(0);
//   setHighScore(0);
// };
