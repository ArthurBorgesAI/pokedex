import React, { useState } from "react";
import * as S from "./styles";

const SearchBar = (props) => {
  const [search, setSearch] = useState("ditto");
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.lenght === 0) onSearch(null);
  };
  const onClickHandler = () => {
    onSearch(search);
  };

  return (
    <S.Container>
      <S.SearchBar>
        <input placeholder="Search Pokemon" onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Search</button>
      </S.SearchBar>
    </S.Container>
  );
};

export default SearchBar;
