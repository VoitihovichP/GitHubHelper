import React, { FC } from 'react';
import * as S from './styled';
import GithubLogo from '../../assets/logo/GithubLogo.svg';
import SearchInput from '../SearchInput/SearchInput';

const Header: FC = () => {
  return (
    <S.HeaderBlock>
      <S.Logo src={GithubLogo} alt="header-logo" />
      <SearchInput />
    </S.HeaderBlock>
  );
};

export default Header;
