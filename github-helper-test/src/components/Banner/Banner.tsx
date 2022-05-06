import React, { FC } from 'react';
import * as S from './styled';

type BannerProps = {
  imgPath: string;
  text: string;
};

const Banner: FC<BannerProps> = ({ imgPath, text }) => {
  return (
    <S.BannerWrapper>
      <S.BannerImg src={imgPath} alt="banner-img" />
      <S.BannerText>{text}</S.BannerText>
    </S.BannerWrapper>
  );
};

export default Banner;
