import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Paginate = styled(ReactPaginate)`
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  @media (max-width: 575px) {
    gap: 2px;
  }
  li a {
    width: 21px;
    height: 25px;
    border-radius: 3px;
    padding: 2px 6px;
    font-weight: 400;
    font-size: 14px;
    color: #808080;
    cursor: pointer;
    transition: 0.3s all;
    :hover {
      background-color: #77aef7;
    }
    @media (max-width: 575px) {
      padding: 2px 4px;
      width: 13px;
      height: 15px;
    }
  }
  li.previous a,
  li.next a {
    display: block;
    color: #0064eb;
    transition: 0.3s all;
    :hover {
      transform: scale(1.3);
      background: none;
    }
  }
  li.selected a {
    background-color: #0064eb;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: #808080;
    :hover {
      transform: scale(1);
      background: none;
    }
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
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const PaginationDescr = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: #808080;
`;
