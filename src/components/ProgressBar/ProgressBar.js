import React from "react";

import * as S from "./styles";

function ProgressBar(props) {
  const { title, width, text } = props;
  const num = width + "%";
  return (
    <S.Container>
      <S.H3>{title}</S.H3>
      <div className="bar">
        <S.Span width={width} style={{ width: num }}></S.Span>
      </div>
      <S.H3 className="progress-bar">{text}</S.H3>
    </S.Container>
  );
}

export default ProgressBar;
