import React, { FC } from 'react';
import * as S from './styled';
import SearchSVG from '../../assets/icons/SearchIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';
import { BannerProps } from '../../types/types';

const Banner: FC<BannerProps> = ({ imgPath, text }) => {
  return (
    <S.BannerWrapper>
      <S.BannerImg src={imgPath} alt="banner-img" />
      <S.BannerText>{text}</S.BannerText>
    </S.BannerWrapper>
  )
};

export default Banner;