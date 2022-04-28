import React, { FC } from 'react';
import { UserInfoCardProps } from '../../types/types';
import * as S from './styled';

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
        <S.UserFollowingInfo>{followers} followers</S.UserFollowingInfo>
        <S.UserFollowingInfo>{following} following</S.UserFollowingInfo>
      </S.UserFollowingWrapper>
    </S.UserInfoWrapper>
  );
};

export default UserInfoCard;
