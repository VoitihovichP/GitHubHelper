import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Paginate = styled(ReactPaginate)`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  li a {
    width: 21px;
    height: 25px;
    border-radius: 3px;
    padding: 2px 6px;
    font-weight: 400;
    font-size: 14px;
    color: #808080;
    cursor: pointer;
  }
  li.previous a,
  li.next a {
    color: #0064eb;
  }
  li.selected a {
    background-color: #0064eb;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: #808080;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

export const PaginateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export const PaginationDescr = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #808080;
`;
