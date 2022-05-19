import React, { FC } from 'react';
import * as S from './styled';

const Loader: FC = () => {
  return (
    <S.LoaderWrapper>
      <S.LoaderSpan></S.LoaderSpan>
      <S.LoaderSpan></S.LoaderSpan>
      <S.LoaderSpan></S.LoaderSpan>
    </S.LoaderWrapper>
  );
};
export default Loader;
