import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
  position: relative;
`;

export const InputForSearch = styled.input`
  padding: 8px 0 9px 42px;
  width: 500px;
  min-height: 40px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.01em;
  border: none;
  border-radius: 6px;
  outline: none;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
`;
