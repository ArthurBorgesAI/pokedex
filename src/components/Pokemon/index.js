import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";

import * as S from "./styles";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;

  const onHeartClick = () => updateFavoritePokemons(pokemon.name);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  return (
    <S.PokeCard>
      <S.PokeImgContainer>
        <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      </S.PokeImgContainer>

      <S.CardBody>
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <h4>#{pokemon.id}</h4>
        </div>

        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>

          <button onClick={onHeartClick}> {heart} </button>
        </div>
      </S.CardBody>
    </S.PokeCard>
  );
};

export default Pokemon;
