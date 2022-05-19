import React, { FC } from 'react';
import { UserInfoCardProps } from '../../types/types';
import * as S from './styled';
import FollowersIcon from '../../assets/icons/followers-icon.svg';
import FollowingIcon from '../../assets/icons/following-icon.svg';

const UserInfoCard: FC<UserInfoCardProps> = ({
  photo,
  name,
  github_name,
  github_url,
  followers,
  following,
}) => {
  return (
    <S.UserInfoWrapper>
      <S.UserInfoPhoto src={photo} alt="user-photo" />
      <S.UserInfoName>{name}</S.UserInfoName>
      <S.UserInfoGithub href={github_url} target="_blank">
        {github_name}
      </S.UserInfoGithub>
      <S.UserFollowingWrapper>
        <S.UserFollowWrapper>
          <S.UserFollowIcon src={FollowersIcon} alt="followers-icon" />
          <S.UserFollowingInfo>{followers} followers</S.UserFollowingInfo>
        </S.UserFollowWrapper>
        <S.UserFollowWrapper>
          <S.UserFollowIcon src={FollowingIcon} alt="following-icon" />
          <S.UserFollowingInfo>{following} following</S.UserFollowingInfo>
        </S.UserFollowWrapper>
      </S.UserFollowingWrapper>
    </S.UserInfoWrapper>
  );
};

export default UserInfoCard;
