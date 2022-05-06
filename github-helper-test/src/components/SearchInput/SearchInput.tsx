import React, { ChangeEvent, FC, KeyboardEvent, useContext, useState } from 'react';
import SearchSVG from '../../assets/icons/SearchIcon.svg';
import { addRepoInfoAction, addUSerInfoAction } from '../../context/actionCreators';
import { AppContext } from '../../context/context';
import getRepo from '../../requests/getRepo';
import getUser from '../../requests/getUser';
import { GetRepoResponse, GetUserResponse } from '../../types/types';
import * as S from './styled';

const SearchInput: FC = () => {
  const [searchValue, setValue] = useState<string>('');
  const [isEmptyValue, setEmptyValue] = useState<boolean>(false);

  const { dispatch } = useContext(AppContext);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target) {
      setValue(e.target.value);
    }
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      if (!searchValue) {
        setEmptyValue(true);
      } else {
        setEmptyValue(false);

        dispatch(addRepoInfoAction(false, []));

        getUser(searchValue).then((data: GetUserResponse | null) => {
          dispatch(addUSerInfoAction(data));
        });

        getRepo(searchValue).then((data: GetRepoResponse) => {
          dispatch(addRepoInfoAction(true, data));
        });
        //Promise all
      }
    }
  };

  return (
    <S.SearchInputWrapper>
      <S.SearchIcon src={SearchSVG} alt="Search-Icon" />
      <S.InputForSearch
        isEmpty={isEmptyValue}
        onChange={(e) => onChangeValue(e)}
        onKeyDown={(e) => handleSearch(e)}
        value={searchValue}
        type="text"
        placeholder="Enter GitHub username"
      />
    </S.SearchInputWrapper>
  );
};

export default SearchInput;
