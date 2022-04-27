import React, { FC } from 'react';
import * as S from './styled';

import Banner from '../../components/Banner/Banner';

import SearchSVG from '../../assets/icons/SearchIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';
import { BannerTitles } from '../../types/enums';

const Home: FC = () => {
  return (
    <S.HomeBlock>
      <Banner imgPath={SearchSVG} text={BannerTitles.START_SEARCHING} />
    </S.HomeBlock>
  );
};

export default Home;
