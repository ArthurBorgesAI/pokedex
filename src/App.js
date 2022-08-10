import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./services/api";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";
import { FavoriteProvider } from "./contexts/favoritesContext";

const localStorageKey = "favorite_pokemon";

function App() {
  const [page, setPage] = useState(0);
  const [totalPages, SetTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  const itensPerPage = 24;

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    if (!searching) fetchPokemons();
  }, [page]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      SetTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (e) {
      console.log(e);
    }
  };

  const updateFavoritePokemons = (name) => {
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

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      SetTotalPages(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons,
      }}
    >
      <>
        <Navbar />
        <SearchBar onSearch={onSearchHandler} />
        {notFound ? (
          <div>
            <h1>Sorry, Pokemon not found! </h1>
            <img
              alt="PokéAPI"
              src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            />
          </div>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </>
    </FavoriteProvider>
  );
}

export default App;
