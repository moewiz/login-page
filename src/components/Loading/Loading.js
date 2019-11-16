import React from 'react';
import {LoadingStyled} from "./styled";

const Loading = () => {
  return (
    <LoadingStyled>
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </LoadingStyled>
  );
};

export default Loading;
