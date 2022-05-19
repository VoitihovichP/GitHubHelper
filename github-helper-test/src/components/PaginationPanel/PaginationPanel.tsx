import React, { FC, useContext, useEffect, useState } from 'react';
import { addRepoInfoAction } from '../../context/actionCreators';
import { AppContext } from '../../context/context';
import getRepo from '../../requests/getRepo';
import * as S from './styled';

const PaginationPanel: FC = () => {
  const itemsPerPage = 4;
  const indexDifference = 1; // у GitHub API страницы считаются с 1, а в react-paginate с 0, переменная нужна что бы сровнять разницу

  const { state, dispatch } = useContext(AppContext);
  const { userInfo, repoInfo } = state;
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemsFrom, setItemsFrom] = useState<number>(1);
  const [itemsTo, setItemsTo] = useState<number>(
    repoInfo.length < itemsPerPage ? repoInfo.length : itemsPerPage
  );

  useEffect(() => {
    if (userInfo) {
      setPageCount(Math.ceil(userInfo.public_repos / itemsPerPage));
    }
  }, [itemsFrom, userInfo]);

  const handlePageChange = (e: { selected: number }) => {
    if (userInfo) {
      getRepo(userInfo.login, e.selected + indexDifference).then((data) => {
        dispatch(addRepoInfoAction(false, data));
        if (data.length < itemsPerPage) {
          setItemsTo(userInfo.public_repos);
        } else {
          setItemsTo((e.selected + indexDifference) * itemsPerPage);
        }

        setItemsFrom(((e.selected * itemsPerPage) % userInfo.public_repos) + indexDifference);
      });
    }
  };

  return (
    <S.PaginateWrapper>
      <S.PaginationDescr>
        {itemsFrom} - {itemsTo} of {userInfo ? userInfo.public_repos : null} items
      </S.PaginationDescr>
      <S.Paginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => handlePageChange(e)}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
      />
    </S.PaginateWrapper>
  );
};

export default PaginationPanel;
