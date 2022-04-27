import React, { FC } from 'react';
import SearchSVG from '../../assets/icons/SearchIcon.svg';
import * as S from './styled';

const SearchInput: FC = () => {
  return (
    <S.SearchInputWrapper>
      <S.SearchIcon src={SearchSVG} alt="Search-Icon" />
      <S.InputForSearch type="text" placeholder="Enter GitHub username" />
    </S.SearchInputWrapper>
  );
}

export default SearchInput;