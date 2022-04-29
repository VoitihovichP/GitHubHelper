import React, { FC, useContext } from 'react';
import * as S from './styled';

import Banner from '../../components/Banner/Banner';

import SearchSVG from '../../assets/icons/SearchIcon.svg';
import UserIcon from '../../assets/icons/UserIcon.svg';
import NoRepoIcon from '../../assets/icons/NoRepoIcon.svg';

import { BannerTitles } from '../../types/enums';
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard';
import { AppContext } from '../../context/context';
import Loader from '../../components/Loader/Loader';
import RepoItem from '../../components/RepoItem/RepoItem';

const Home: FC = () => {
  const { state } = useContext(AppContext);
  const { dataIsLoad, userInfo, isFirstSearch, repoInfo } = state;

  return (
    <S.HomeBlock>
      {dataIsLoad ? (
        userInfo !== null ? (
          <S.MainInfoWrapper>
            <UserInfoCard
              photo={userInfo.avatar_url}
              name={userInfo.name}
              github_name={userInfo.login}
              github_url={userInfo.html_url}
              followers={userInfo.followers}
              following={userInfo.following}
            />
            {repoInfo.length !== 0 ? (
              <S.Repos>
                <S.ReposTitle>Repositories ({userInfo.public_repos})</S.ReposTitle>
                <S.ReposWrapper>
                  {repoInfo.map((item) => (
                    <RepoItem
                      key={item.id}
                      name={item.name}
                      linkToRepo={item.html_url}
                      description={item.description}
                    />
                  ))}
                </S.ReposWrapper>
              </S.Repos>
            ) : (
              <S.WarningForRepo>
                <Banner imgPath={NoRepoIcon} text={BannerTitles.REPO_NOT_FOUND} />
              </S.WarningForRepo>
            )}
          </S.MainInfoWrapper>
        ) : !isFirstSearch ? (
          <Banner imgPath={UserIcon} text={BannerTitles.USER_NOT_FOUND} />
        ) : (
          <Banner imgPath={SearchSVG} text={BannerTitles.START_SEARCHING} />
        )
      ) : (
        <Loader />
      )}
    </S.HomeBlock>
  );
};

export default Home;
