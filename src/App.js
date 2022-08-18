import React, { useEffect, useState } from "react";
import { FavoritesProvider } from "./contexts/favoritesContext";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Favorites from "./views/Favorites";
import PokemonDescription from "./views/PokemonDescription";
import Footer from "./components/Footer";

const localStorageKey = "favorite_pokemon";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavoritesPokemons();
  }, []);

  const updateFavoritesPokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };
  const loadFavoritesPokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  return (
    <FavoritesProvider
      value={{
        favoritesPokemons: favorites,
        updateFavoritesPokemons: updateFavoritesPokemons,
      }}
    >
      <div className="App">
          <Routes>
            <Route path="/favorites" element={<Favorites/>} />   

            <Route path="/" exact element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/description/:id" element={<PokemonDescription />} />
          </Routes>

        <Footer />
      </div>
    </FavoritesProvider>
  );
}

export default App;
