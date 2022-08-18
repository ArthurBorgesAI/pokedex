import React, { useState, useEffect } from "react";

import Pokedex from "../../components/Pokedex";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

import getPokemonData from "../../services/getPokemonData";
import getPokemons from "../../services/getPokemons";
import searchPokemon from "../../services/searchPokemon";

import * as S from './styles';

const snorlaxSad = require('../../assets/images/tired.gif');

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * page);

      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 24));
      setNotFound(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }
  }, [page]);

  const onSearch = async (pokemon) => {
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
      setTotalPages(1);
    }
    setLoading(false);
    setSearching(false);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={onSearch} />
      {notFound ? (
        <S.Div className="not-found-text">
          <h1>Pokemon not found! </h1>
          <S.Img src={snorlaxSad} alt="notfound" />
        </S.Div>
      ) : (
        <Pokedex
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          loading={loading}
        />
      )}
    </div>
  );
}

export default Home;
