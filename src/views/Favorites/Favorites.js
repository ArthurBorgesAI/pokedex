import React, { useState, useContext, useEffect } from "react";

import Header from '../../components/Header';
import Pokemon from "../../components/Pokemon";
import Pagination from "../../components/Pagination";

import favoritesContext from "../../contexts/favoritesContext";
import searchPokemon from "../../services/searchPokemon";

import * as S from "./styles";

const psyduckConfused = require('../../assets/images/psyduck.gif');

const Favorites = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const { favoritesPokemons } = useContext(favoritesContext);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const promises = favoritesPokemons.map(async (pokemon) => {
        return await searchPokemon(pokemon);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(promises.length / promises.length));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPokemons();
    console.log(favoritesPokemons);
  }, [favoritesPokemons]);

  const previousPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <div>
      <Header />
      {favoritesPokemons >= 0 ? (
        <S.Div>
          <S.H1>You don't have any ❤️ Pokemon...</S.H1>
          <S.Image src={psyduckConfused} alt="psyduck confused" />
        </S.Div>
      ) : (
        <>
          <S.Container>
            <S.H1>Favorites </S.H1>
            <Pagination
              page={page + 1}
              totalPages={total}
              onLeftClick={previousPage}
              onRightClick={nextPage}
            />
          </S.Container>
          <S.Grid>
            {pokemons.map((pokemon, idx) => {
              return <Pokemon pokemon={pokemon} key={idx} />;
            })}
          </S.Grid>
        </>
      )}
    </div>
  );
};

export default Favorites;
