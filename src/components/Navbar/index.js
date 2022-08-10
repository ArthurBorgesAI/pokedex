import React, { useContext } from "react";
import favoriteContext from "../../contexts/favoritesContext";
import * as S from "./styles";

const Navbar = () => {
  const { favoritePokemons } = useContext(favoriteContext);
  return (
    <S.Container>
      <nav>
        <img
          alt="PokéAPI"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          className="navbar-img"
        />
        <div>{favoritePokemons.length}❤️</div>
      </nav>
    </S.Container>
  );
};

export default Navbar;
