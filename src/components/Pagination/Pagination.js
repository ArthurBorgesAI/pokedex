import React from "react";
import * as S from "./styles";
import ArrowLeft from "../ArrowLeft";
import ArrowRight from "../ArrowRight";

function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props;
  return (
    <S.Container>
      <S.Button onClick={onLeftClick}>
        <ArrowLeft />
      </S.Button>
      <div>
        {page} de {totalPages}
      </div>
      <S.Button onClick={onRightClick}>
        <ArrowRight />
      </S.Button>
    </S.Container>
  );
}

export default Pagination;
