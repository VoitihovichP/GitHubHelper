import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  position: relative;
`; 

export const InputForSearch = styled.input`
  padding: 8px 0 8px 42px;
  width: 500px;
  min-height: 40px;
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