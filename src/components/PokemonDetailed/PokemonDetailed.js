import React, { useContext } from "react";
import FavoritesContext from "../../contexts/favoritesContext";
import { NavLink } from "react-router-dom";
import ProgressBar from "../ProgressBar";

import "../Pokemon/Pokemon.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import * as S from "./styles";

function PokemonDetailed(props) {
  const { pokemons, loading } = props;

  const { favoritesPokemons, updateFavoritesPokemons } = useContext(FavoritesContext);
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritesPokemons.includes(pokemons.name)
    ? redHeart
    : blackHeart;
  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritesPokemons(pokemons.name);
  };

  return (
    <div>
      {loading ? (
        <div>
          <h1>LOADING ...</h1>
        </div>
      ) : (
        <S.Container className={pokemons.types && pokemons.types[0].type.name}>
          <S.Top>
            <S.First>
              <NavLink to="/home">
                <ArrowBackIosIcon fontSize="large" />
              </NavLink>
              <div>
                {" "}
                <S.Button onClick={clickHeart}>
                  <S.Favorite>{heart}</S.Favorite>
                </S.Button>
              </div>
            </S.First>

            <S.Second>
              <S.Name>
                <S.H1>{pokemons.name}</S.H1>
                <S.Type>
                  {pokemons.types &&
                    pokemons.types.map((type, idx) => {
                      return (
                        <S.Text
                          key={idx}
                          className={type.type.name}
                          id={type.type.name}
                        >
                          {type.type.name}
                        </S.Text>
                      );
                    })}
                </S.Type>
              </S.Name>
              <S.Id>#{pokemons.id}</S.Id>
            </S.Second>
            
            <S.Img src={require(`../../assets/pokedex/${pokemons.id}.png`)} alt={pokemons.id} />
          </S.Top>

          <S.Bottom>
            <S.B1>
              <S.H2>Status</S.H2>
            </S.B1>''

            {pokemons.stats &&
              pokemons.stats.map((stat, idx) => {
                return (
                  <ProgressBar
                    key={idx}
                    title={stat.stat.name}
                    width={stat.base_stat}
                    text={stat.base_stat}
                  />
                );
              })}
          </S.Bottom>
        </S.Container>
      )
      }
    </div>
  );
}

export default PokemonDetailed;
