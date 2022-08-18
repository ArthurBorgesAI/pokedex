import React from "react";

import Pagination from "../Pagination";
import Pokemon from "../Pokemon";

import * as S from "./styles";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const previousPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };
  const nextPage = () => {
    const nextPage = Math.min(page + 1, totalPages);
    setPage(nextPage);
  };

  return (
    <S.PokeContainer>
      <S.Header>
        <h1>POKEDEX</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={previousPage}
          onRightClick={nextPage}
        />
      </S.Header>

      {loading ? (
        <div>
          <h1>LOADING ...</h1>
        </div>
      ) : (
        <S.Grid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </S.Grid>
      )}
    </S.PokeContainer>
  );
};

export default Pokedex;
