import { useState, useEffect } from "react";
import axios from "axios";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";

import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=12"
      );
      const data = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonResponse.data.sprites.front_default,
            id: pokemonResponse.data.id,
          };
        })
      );
      setCards(shuffleCards(data));
    };

    fetchCards();
  }, []);

  const shuffleCards = (cards) => {
    return [...cards].sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      alert("Game Over! You clicked the same card twice.");
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
      setBestScore(Math.max(score + 1, bestScore));
      setCards(shuffleCards(cards));
    }
  };

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
