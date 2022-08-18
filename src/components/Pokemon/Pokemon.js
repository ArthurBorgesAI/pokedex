import React, { useContext } from "react";
import FavoritesContext from "../../contexts/favoritesContext";
import { Link } from "react-router-dom";

import * as S from './styles';
import './Pokemon.css';

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritesPokemons, updateFavoritesPokemons } =
    useContext(FavoritesContext);
  

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritesPokemons(pokemon.name);
  }
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritesPokemons.includes(pokemon.name) ? redHeart : blackHeart;


  return (
    <Link to={`/description/` + pokemon.id}  props={pokemon}>

    <S.Card className={pokemon.types[0].type.name}>
      <S.Img>
        {pokemon.id < 650  ?
        <img src={require(`../../assets/animated/${pokemon.id}.gif`)} alt={`${pokemon.id} gif`}/> :
        <img src={require(`../../assets/animated/${pokemon.id}.png`)} alt={`${pokemon.id} png`}/>
        }      
      </S.Img>

      <S.Body>
        <S.Top>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </S.Top>
        
        <S.Bottom>
          <S.Type>
            {pokemon.types.map((type, idx) => {
              return <S.Text key={idx} className={type.type.name}
              id={type.type.name}>{type.type.name}</S.Text>
             
            })}
          </S.Type>
          <button onClick={clickHeart}>
            <S.Favorite>{heart}</S.Favorite>
          </button>
        </S.Bottom>
      </S.Body>
     
    </S.Card>
    </Link>

  );
}

export default Pokemon;
