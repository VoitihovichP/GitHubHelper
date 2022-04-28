import React, { ChangeEvent, FC, KeyboardEvent, useContext, useState } from 'react';
import SearchSVG from '../../assets/icons/SearchIcon.svg';
import { addUSerInfoAction } from '../../context/actionCreators';
import { AppContext } from '../../context/context';
import getUser from '../../requests/getUser';
import { GetUserResponse } from '../../types/types';
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
      if (searchValue === '') {
        setEmptyValue(true);
      } else {
        setEmptyValue(false);

        dispatch(addUSerInfoAction(false, null));

        getUser(searchValue).then((data: GetUserResponse | null) => {
          dispatch(addUSerInfoAction(true, data));
        });
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
