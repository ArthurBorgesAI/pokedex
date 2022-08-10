import React from "react";
import Pagination from "../Pagination";
import Pokemon from "../Pokemon";

import * as S from "./styles";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  const onLeftClick = () => page > 0 && setPage(page - 1);
  const onRightClick = () => page + 1 < totalPages && setPage(page + 1);

  return (
    <S.PokeContainer>
      <h2>POKEDEX</h2>
      <S.Header>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
      </S.Header>

      {loading ? (
        <div> LOADING ...</div>
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
