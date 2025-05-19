import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

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

  return (
    <div className="App">
      <h1>Memory Card Game</h1>
    </div>
  );
}

export default App;
