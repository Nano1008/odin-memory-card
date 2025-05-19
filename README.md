# Memory Card Game

A fun and interactive Pokemon memory card game built with React. Test your memory by clicking on Pokemon cards without selecting the same one twice!

## Features

- Dynamic Pokemon cards fetched from the PokeAPI
- Score tracking (current score and best score)
- Card shuffling after each selection
- Smooth hover animations

## Technologies Used

- React.js
- Axios for API requests
- CSS for styling
- PokeAPI

## How It Works

- The app fetches 12 Pokemon from the PokeAPI when it loads
- Each card displays a Pokemon's image and name
- The game keeps track of which cards you've clicked using React state
- When you click a card:
  - If it's a new card, your score increases and cards shuffle
  - If it's a card you've already clicked, the game resets