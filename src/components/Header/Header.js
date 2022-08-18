import React, { useContext } from "react";

import favoritesContext from "../../contexts/favoritesContext";
import { NavLink } from "react-router-dom";

import * as S from "./styles";


const Header = () => {
  const logo = require('../../assets/images/logo.png');
  const { favoritesPokemons } = useContext(favoritesContext);

  return (
    <S.Nav>
      <NavLink to="/home">
        <S.Logo>
          <img src={logo} alt="POKEAPI" />
        </S.Logo>
      </NavLink>

      <S.NavMenu>
        <NavLink to="/home" >
          <span>HOME</span>
        </NavLink>

        <NavLink to="/favorites" className="favorite">
          <span>❤️{favoritesPokemons.length} FAVORITE</span>
        </NavLink>
      </S.NavMenu>
    </S.Nav>
  );
};

export default Header;
