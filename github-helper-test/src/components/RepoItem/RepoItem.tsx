import React, { FC } from 'react';
import { UserRepoProps } from '../../types/types';
import * as S from './styled';

const RepoItem: FC<UserRepoProps> = ({ name, linkToRepo, description }) => {
  return (
    <S.RepoItemWrapper>
      <S.RepoItemTitle href={linkToRepo} target="_blank">
        {name}
      </S.RepoItemTitle>
      <S.RepoItemDescr>{description}</S.RepoItemDescr>
    </S.RepoItemWrapper>
  );
};

export default RepoItem;
