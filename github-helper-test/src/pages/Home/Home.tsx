import React, { FC, useContext } from 'react';
import * as S from './styled';

import Banner from '../../components/Banner/Banner';

import SearchSVG from '../../assets/icons/SearchIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';
import { BannerTitles } from '../../types/enums';
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard';
import { AppContext } from '../../context/context';

const Home: FC = () => {
  const { state } = useContext(AppContext);
  const { dataIsLoad, userInfo, isFirstSearch } = state;

  return (
    <S.HomeBlock>
      {dataIsLoad && userInfo !== null ? (
        <div>
          <UserInfoCard
            photo={userInfo.avatar_url}
            name={userInfo.name}
            github_name={userInfo.login}
            github_url={userInfo.html_url}
            followers={userInfo.followers}
            following={userInfo.following}
          />
        </div>
      ) : dataIsLoad && !isFirstSearch ? (
        <Banner imgPath={UserIcon} text={BannerTitles.USER_NOT_FOUND} />
      ) : (
        <Banner imgPath={SearchSVG} text={BannerTitles.START_SEARCHING} />
      )}
    </S.HomeBlock>
  );
};

export default Home;
