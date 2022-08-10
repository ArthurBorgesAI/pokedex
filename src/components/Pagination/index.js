import React from "react";
import * as S from "./styles";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <S.Container>
      <button onClick={onLeftClick}>
        <div>◄</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>►</div>
      </button>
    </S.Container>
  );
};

export default Pagination;
