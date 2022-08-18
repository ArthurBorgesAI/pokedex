import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import PokemonDetailed from "../../components/PokemonDetailed";

import searchPokemon from "../../services/searchPokemon";

import { useParams } from "react-router-dom";

const PokemonDescription = () => {
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

const search = async (id) => {
      try {
        setLoading(true);
        const result = await searchPokemon(id);
        setPokemons(result);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

  useEffect(() => {  
    search(id);
  }, []);

  return (
    <div>
      <Header />
      <PokemonDetailed pokemons={pokemons} loading={loading} />
    </div>
  );
};

export default PokemonDescription;
